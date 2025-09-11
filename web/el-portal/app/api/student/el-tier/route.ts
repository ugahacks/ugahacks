import { calculateProgress, getTierRequirement } from '@/lib/el-tiers'
import { db } from '@/lib/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 })
    }

    // Get user's EL tier assignment
    const tierQuery = await db.collection('el-portal-tiers').where('userId', '==', userId).get()
    
    if (tierQuery.empty) {
      return NextResponse.json({
        success: true,
        elTier: null,
        message: 'No EL tier assigned'
      })
    }

    const tierDoc = tierQuery.docs[0]
    const tierData = tierDoc.data() as any
    const tierRequirement = getTierRequirement(tierData.tierLevel)

    if (!tierRequirement) {
      return NextResponse.json({ error: 'Invalid tier data' }, { status: 500 })
    }

    // Calculate completed hours from attendance records
    const attendanceQuery = await db.collection('el-portal-attendance')
      .where('userId', '==', userId)
      .get()

    let completedClubHours = 0
    let completedAdditionalHours = 0

    for (const doc of attendanceQuery.docs) {
      const attendance = doc.data()
      const eventQuery = await db.collection('el-portal-events').doc(attendance.eventId).get()
      
      if (eventQuery.exists) {
        const event = eventQuery.data()
        if (event?.eventType === 'club_meeting') {
          completedClubHours += event.hours || 0
        } else if (event?.eventType === 'additional_involvement') {
          completedAdditionalHours += event.hours || 0
        }
      }
    }

    const progress = calculateProgress(tierRequirement, completedClubHours, completedAdditionalHours)

    return NextResponse.json({
      success: true,
      elTier: {
        id: tierDoc.id,
        ...tierData,
        requiredHours: tierRequirement.totalHours,
        requiredReflections: tierRequirement.reflectionsRequired,
        progress
      }
    })
  } catch (error) {
    console.error('Error fetching EL tier:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}