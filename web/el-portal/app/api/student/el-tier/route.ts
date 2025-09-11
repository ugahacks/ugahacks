import { calculateProgress, getTierRequirement } from '@/lib/el-tiers';
import { adminDb } from '@/lib/firebase-admin';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    // Get user's EL tier assignment
    const tierQuery = await adminDb.collection('el-tiers').where('userId', '==', userId).get();
    
    if (tierQuery.empty) {
      return NextResponse.json({
        success: true,
        data: null,
        message: 'No EL tier assigned'
      });
    }

    const tierDoc = tierQuery.docs[0];
    const tierData = tierDoc.data() as any;
    const tierRequirement = getTierRequirement(tierData.tierLevel);

    if (!tierRequirement) {
      return NextResponse.json({ error: 'Invalid tier data' }, { status: 500 });
    }

    // Calculate completed hours from attendance records
    const attendanceQuery = await adminDb.collection('attendance')
      .where('userId', '==', userId)
      .get();

    let completedClubHours = 0;
    let completedAdditionalHours = 0;

    for (const doc of attendanceQuery.docs) {
      const attendance = doc.data();
      const eventQuery = await adminDb.collection('events').doc(attendance.eventId).get();
      
      if (eventQuery.exists) {
        const event = eventQuery.data();
        if (event?.eventType === 'club_meeting') {
          completedClubHours += event.hourValue || 0;
        } else if (event?.eventType === 'additional_involvement') {
          completedAdditionalHours += event.hourValue || 0;
        }
      }
    }

    const progress = calculateProgress(tierRequirement, completedClubHours, completedAdditionalHours);

    return NextResponse.json({
      success: true,
      data: {
        tier: {
          id: tierDoc.id,
          ...tierData
        },
        requirement: tierRequirement,
        progress,
        completedHours: {
          club: completedClubHours,
          additional: completedAdditionalHours,
          total: completedClubHours + completedAdditionalHours
        }
      }
    });
  } catch (error) {
    console.error('Error fetching EL tier:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
