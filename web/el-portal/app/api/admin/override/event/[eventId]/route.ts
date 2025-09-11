import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Override event due date
export async function POST(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    const { eventId } = params;
    const body = await request.json();
    const { newDueDate, overrideNotes, overriddenBy } = body;

    if (!newDueDate || !overrideNotes || !overriddenBy) {
      return NextResponse.json({ 
        error: 'New due date, override notes, and overrider ID are required' 
      }, { status: 400 });
    }

    // Get event record
    const eventDoc = await adminDb.collection('events').doc(eventId).get();
    if (!eventDoc.exists) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Update event with new due date and override information
    await adminDb.collection('events').doc(eventId).update({
      dueDate: newDueDate,
      overriddenBy,
      overrideNotes,
      overrideReason: 'due_date_extension',
      updatedAt: getCurrentUnixTime()
    });

    return NextResponse.json({
      success: true,
      message: 'Event due date overridden successfully'
    });
  } catch (error) {
    console.error('Error overriding event due date:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Remove override from event
export async function DELETE(
  request: NextRequest,
  { params }: { params: { eventId: string } }
) {
  try {
    const { eventId } = params;

    // Get event record
    const eventDoc = await adminDb.collection('events').doc(eventId).get();
    if (!eventDoc.exists) {
      return NextResponse.json({ error: 'Event not found' }, { status: 404 });
    }

    // Remove override information (keep original due date)
    await adminDb.collection('events').doc(eventId).update({
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
    console.error('Error removing event override:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
