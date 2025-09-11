import { adminDb } from '@/lib/firebase-admin';
import { getCurrentUnixTime } from '@/lib/utils';
import { NextRequest, NextResponse } from 'next/server';

// Clear all data after archiving
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { confirmation, clearReason } = body;

    if (confirmation !== 'CLEAR_ALL_DATA') {
      return NextResponse.json({ 
        error: 'Confirmation required. Send "CLEAR_ALL_DATA" to proceed.' 
      }, { status: 400 });
    }

    if (!clearReason) {
      return NextResponse.json({ 
        error: 'Clear reason is required' 
      }, { status: 400 });
    }

    const now = getCurrentUnixTime();

    // Create clear operation record
    const clearData = {
      id: `clear_${now}`,
      clearReason,
      clearedAt: now,
      clearedBy: 'system', // In a real system, this would be the admin user ID
      status: 'clearing'
    };

    await adminDb.collection('clear-operations').doc(clearData.id).set(clearData);

    // Clear attendance records
    const attendanceSnapshot = await adminDb.collection('attendance').get();
    const attendanceBatch = adminDb.batch();
    
    for (const doc of attendanceSnapshot.docs) {
      attendanceBatch.delete(doc.ref);
    }

    // Clear reflection records
    const reflectionSnapshot = await adminDb.collection('reflections').get();
    const reflectionBatch = adminDb.batch();
    
    for (const doc of reflectionSnapshot.docs) {
      reflectionBatch.delete(doc.ref);
    }

    // Clear event records
    const eventSnapshot = await adminDb.collection('events').get();
    const eventBatch = adminDb.batch();
    
    for (const doc of eventSnapshot.docs) {
      eventBatch.delete(doc.ref);
    }

    // Clear EL tier assignments
    const tierSnapshot = await adminDb.collection('el-tiers').get();
    const tierBatch = adminDb.batch();
    
    for (const doc of tierSnapshot.docs) {
      tierBatch.delete(doc.ref);
    }

    // Execute all batch operations
    await Promise.all([
      attendanceBatch.commit(),
      reflectionBatch.commit(),
      eventBatch.commit(),
      tierBatch.commit()
    ]);

    // Update clear operation status
    await adminDb.collection('clear-operations').doc(clearData.id).update({
      status: 'completed',
      completedAt: getCurrentUnixTime(),
      recordCounts: {
        attendance: attendanceSnapshot.size,
        reflections: reflectionSnapshot.size,
        events: eventSnapshot.size,
        elTiers: tierSnapshot.size
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Data cleared successfully',
      data: {
        clearId: clearData.id,
        recordCounts: {
          attendance: attendanceSnapshot.size,
          reflections: reflectionSnapshot.size,
          events: eventSnapshot.size,
          elTiers: tierSnapshot.size
        }
      }
    });
  } catch (error) {
    console.error('Error clearing data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
