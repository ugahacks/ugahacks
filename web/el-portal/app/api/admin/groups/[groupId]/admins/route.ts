import { db } from '@/lib/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

// Get group admins
export async function GET(
  request: NextRequest,
  { params }: { params: { groupId: string } }
) {
  try {
    const { groupId } = params

    // Get group details
    const groupDoc = await db.collection('el-portal-groups').doc(groupId).get()
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    const groupData = groupDoc.data()
    const adminIds = groupData?.admins || []

    // Get admin user details
    const adminUsers = []
    for (const adminId of adminIds) {
      const userDoc = await db.collection('el-portal').doc(adminId).get()
      if (userDoc.exists) {
        const userData = userDoc.data()
        adminUsers.push({
          id: userDoc.id,
          firstName: userData?.firstName,
          lastName: userData?.lastName,
          email: userData?.email,
          myId: userData?.myId,
          organization: userData?.organization,
        })
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        groupId,
        groupName: groupData?.name,
        admins: adminUsers
      }
    })
  } catch (error) {
    console.error('Error fetching group admins:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Add group admin
export async function POST(
  request: NextRequest,
  { params }: { params: { groupId: string } }
) {
  try {
    const { groupId } = params
    const body = await request.json()
    const { adminId } = body

    if (!adminId) {
      return NextResponse.json({ error: 'Admin ID required' }, { status: 400 })
    }

    // Check if user exists and is admin
    const userDoc = await db.collection('el-portal').doc(adminId).get()
    if (!userDoc.exists) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    const userData = userDoc.data()
    if (!userData?.isAdmin) {
      return NextResponse.json({ error: 'User is not an admin' }, { status: 400 })
    }

    // Get group details
    const groupDoc = await db.collection('el-portal-groups').doc(groupId).get()
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    const groupData = groupDoc.data()
    const adminIds = groupData?.admins || []

    // Check if user is already an admin
    if (adminIds.includes(adminId)) {
      return NextResponse.json({ error: 'User is already a group admin' }, { status: 400 })
    }

    // Add admin to group
    const updatedAdminIds = [...adminIds, adminId]
    await db.collection('el-portal-groups').doc(groupId).update({
      admins: updatedAdminIds,
      updatedAt: Date.now()
    })

    return NextResponse.json({
      success: true,
      message: 'Admin added successfully',
      data: {
        adminId,
        adminName: `${userData.firstName} ${userData.lastName}`,
        adminEmail: userData.email
      }
    })
  } catch (error) {
    console.error('Error adding group admin:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Remove group admin
export async function DELETE(
  request: NextRequest,
  { params }: { params: { groupId: string } }
) {
  try {
    const { groupId } = params
    const { searchParams } = new URL(request.url)
    const adminId = searchParams.get('adminId')

    if (!adminId) {
      return NextResponse.json({ error: 'Admin ID required' }, { status: 400 })
    }

    // Get group details
    const groupDoc = await db.collection('el-portal-groups').doc(groupId).get()
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    const groupData = groupDoc.data()
    const adminIds = groupData?.admins || []

    // Check if user is an admin
    if (!adminIds.includes(adminId)) {
      return NextResponse.json({ error: 'User is not a group admin' }, { status: 400 })
    }

    // Remove admin from group
    const updatedAdminIds = adminIds.filter(id => id !== adminId)
    await db.collection('el-portal-groups').doc(groupId).update({
      admins: updatedAdminIds,
      updatedAt: Date.now()
    })

    return NextResponse.json({
      success: true,
      message: 'Admin removed successfully'
    })
  } catch (error) {
    console.error('Error removing group admin:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}