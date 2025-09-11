import { db } from '@/lib/firebase-admin'
import { UserELTier } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

// Get all EL tier assignments
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('userId')

    let query = db.collection('el-portal-tiers')
    
    if (userId) {
      query = query.where('userId', '==', userId)
    }

    const snapshot = await query.orderBy('createdAt', 'desc').get()
    const tiers = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }))

    return NextResponse.json({
      success: true,
      data: tiers
    })
  } catch (error) {
    console.error('Error fetching EL tiers:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Assign or update EL tier for a user
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { userId, tierLevel, assignedBy, notes } = body

    if (!userId || !tierLevel || !assignedBy) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Get tier requirements
    const { getTierRequirement } = await import('@/lib/el-tiers')
    const tierReq = getTierRequirement(tierLevel)
    
    if (!tierReq) {
      return NextResponse.json({ error: 'Invalid tier level' }, { status: 400 })
    }

    const now = Date.now()

    // Check if user already has a tier assignment
    const existingTierQuery = await db.collection('el-portal-tiers').where('userId', '==', userId).get()
    
    const tierData: Omit<UserELTier, 'id'> = {
      userId,
      tierLevel,
      tierName: tierReq.tierName,
      requiredClubHours: tierReq.requiredClubHours,
      requiredAdditionalHours: tierReq.requiredAdditionalHours,
      totalRequiredHours: tierReq.totalRequiredHours,
      assignedBy,
      notes,
      createdAt: now,
      updatedAt: now
    }

    let tierId: string

    if (!existingTierQuery.empty) {
      // Update existing tier
      const existingTier = existingTierQuery.docs[0]
      tierId = existingTier.id
      await db.collection('el-portal-tiers').doc(tierId).update({
        ...tierData,
        createdAt: existingTier.data().createdAt // Preserve original creation date
      })
    } else {
      // Create new tier assignment
      const tierRef = await db.collection('el-portal-tiers').add(tierData)
      tierId = tierRef.id
    }

    return NextResponse.json({
      success: true,
      message: 'EL tier assigned successfully',
      data: { id: tierId, ...tierData }
    })
  } catch (error) {
    console.error('Error assigning EL tier:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Delete EL tier assignment
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const tierId = searchParams.get('tierId')

    if (!tierId) {
      return NextResponse.json({ error: 'Tier ID required' }, { status: 400 })
    }

    await db.collection('el-portal-tiers').doc(tierId).delete()

    return NextResponse.json({
      success: true,
      message: 'EL tier assignment deleted successfully'
    })
  } catch (error) {
    console.error('Error deleting EL tier:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}