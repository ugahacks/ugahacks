import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Override reflection record
export async function POST(
  request: NextRequest,
  { params }: { params: { reflectionId: string } }
) {
  try {
    const { reflectionId } = params;
    const body = await request.json();
    const { overrideNotes, overrideReason, overriddenBy } = body;

    if (!overrideNotes || !overrideReason || !overriddenBy) {
      return NextResponse.json({ 
        error: 'Override notes, reason, and overrider ID are required' 
      }, { status: 400 });
    }

    // Get reflection record
    const reflectionDoc = await adminDb.collection('reflections').doc(reflectionId).get();
    if (!reflectionDoc.exists) {
      return NextResponse.json({ error: 'Reflection record not found' }, { status: 404 });
    }

    // Update reflection record with override information
    await adminDb.collection('reflections').doc(reflectionId).update({
      overriddenBy,
      overrideNotes,
      overrideReason,
      updatedAt: getCurrentUnixTime()
    });

    return NextResponse.json({
      success: true,
      message: 'Reflection record overridden successfully'
    });
  } catch (error) {
    console.error('Error overriding reflection:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Remove override from reflection record
export async function DELETE(
  request: NextRequest,
  { params }: { params: { reflectionId: string } }
) {
  try {
    const { reflectionId } = params;

    // Get reflection record
    const reflectionDoc = await adminDb.collection('reflections').doc(reflectionId).get();
    if (!reflectionDoc.exists) {
      return NextResponse.json({ error: 'Reflection record not found' }, { status: 404 });
    }

    // Remove override information
    await adminDb.collection('reflections').doc(reflectionId).update({
      overriddenBy: null,
      overrideNotes: null,
      overrideReason: null,
      updatedAt: getCurrentUnixTime()
    });

    return NextResponse.json({
      success: true,
      message: 'Override removed successfully'
    });
  } catch (error) {
    console.error('Error removing reflection override:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
