import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Override attendance record
export async function POST(
  request: NextRequest,
  { params }: { params: { attendanceId: string } }
) {
  try {
    const { attendanceId } = params;
    const body = await request.json();
    const { overrideNotes, overrideReason, overriddenBy } = body;

    if (!overrideNotes || !overrideReason || !overriddenBy) {
      return NextResponse.json({ 
        error: 'Override notes, reason, and overrider ID are required' 
      }, { status: 400 });
    }

    // Get attendance record
    const attendanceDoc = await adminDb.collection('attendance').doc(attendanceId).get();
    if (!attendanceDoc.exists) {
      return NextResponse.json({ error: 'Attendance record not found' }, { status: 404 });
    }

    // Update attendance record with override information
    await adminDb.collection('attendance').doc(attendanceId).update({
      overriddenBy,
      overrideNotes,
      overrideReason,
      updatedAt: getCurrentUnixTime()
    });

    return NextResponse.json({
      success: true,
      message: 'Attendance record overridden successfully'
    });
  } catch (error) {
    console.error('Error overriding attendance:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Remove override from attendance record
export async function DELETE(
  request: NextRequest,
  { params }: { params: { attendanceId: string } }
) {
  try {
    const { attendanceId } = params;

    // Get attendance record
    const attendanceDoc = await adminDb.collection('attendance').doc(attendanceId).get();
    if (!attendanceDoc.exists) {
      return NextResponse.json({ error: 'Attendance record not found' }, { status: 404 });
    }

    // Remove override information
    await adminDb.collection('attendance').doc(attendanceId).update({
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
    console.error('Error removing attendance override:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
