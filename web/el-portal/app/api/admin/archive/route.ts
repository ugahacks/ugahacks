import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Archive data for previous academic year
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { academicYear, archiveReason } = body;

    if (!academicYear || !archiveReason) {
      return NextResponse.json({ 
        error: 'Academic year and archive reason are required' 
      }, { status: 400 });
    }

    const now = getCurrentUnixTime();
    const archiveId = `archive_${academicYear}_${now}`;

    // Create archive record
    const archiveData = {
      id: archiveId,
      academicYear,
      archiveReason,
      archivedAt: now,
      archivedBy: 'system', // In a real system, this would be the admin user ID
      status: 'archiving'
    };

    await adminDb.collection('archives').doc(archiveId).set(archiveData);

    // Archive attendance records
    const attendanceSnapshot = await adminDb.collection('attendance').get();
    const attendanceBatch = adminDb.batch();
    
    for (const doc of attendanceSnapshot.docs) {
      const archiveRef = adminDb.collection('archives').doc(archiveId).collection('attendance').doc(doc.id);
      attendanceBatch.set(archiveRef, doc.data());
    }

    // Archive reflection records
    const reflectionSnapshot = await adminDb.collection('reflections').get();
    const reflectionBatch = adminDb.batch();
    
    for (const doc of reflectionSnapshot.docs) {
      const archiveRef = adminDb.collection('archives').doc(archiveId).collection('reflections').doc(doc.id);
      reflectionBatch.set(archiveRef, doc.data());
    }

    // Archive event records
    const eventSnapshot = await adminDb.collection('events').get();
    const eventBatch = adminDb.batch();
    
    for (const doc of eventSnapshot.docs) {
      const archiveRef = adminDb.collection('archives').doc(archiveId).collection('events').doc(doc.id);
      eventBatch.set(archiveRef, doc.data());
    }

    // Execute all batch operations
    await Promise.all([
      attendanceBatch.commit(),
      reflectionBatch.commit(),
      eventBatch.commit()
    ]);

    // Update archive status
    await adminDb.collection('archives').doc(archiveId).update({
      status: 'completed',
      completedAt: getCurrentUnixTime(),
      recordCounts: {
        attendance: attendanceSnapshot.size,
        reflections: reflectionSnapshot.size,
        events: eventSnapshot.size
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Data archived successfully',
      data: {
        archiveId,
        academicYear,
        recordCounts: {
          attendance: attendanceSnapshot.size,
          reflections: reflectionSnapshot.size,
          events: eventSnapshot.size
        }
      }
    });
  } catch (error) {
    console.error('Error archiving data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Get archive history
export async function GET() {
  try {
    const archivesSnapshot = await adminDb.collection('archives')
      .orderBy('archivedAt', 'desc')
      .get();

    const archives = archivesSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({
      success: true,
      data: archives
    });
  } catch (error) {
    console.error('Error fetching archives:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
