import { adminDb } from '@/lib/firebase-admin'
import { withAuth } from '@/lib/middleware'
import { getCurrentUnixTime } from '@/lib/utils'
import { NextRequest, NextResponse } from 'next/server'

// Get specific group
export const GET = withAuth(async (req, { params }: { params: { groupId: string } }) => {
  try {
    const { groupId } = params

    const groupDoc = await adminDb.collection('groups').doc(groupId).get()
    
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    const groupData = {
      id: groupDoc.id,
      ...groupDoc.data(),
    }

    return NextResponse.json({
      success: true,
      data: groupData,
    })
  } catch (error) {
    console.error('Error fetching group:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
})

// Update specific group
export const PUT = withAuth(async (req, { params }: { params: { groupId: string } }) => {
  try {
    const { groupId } = params
    const body = await req.json()
    const { name, description } = body

    if (!name) {
      return NextResponse.json({ error: 'Group name is required' }, { status: 400 })
    }

    // Check if group exists
    const groupDoc = await adminDb.collection('groups').doc(groupId).get()
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    // Update group
    await adminDb.collection('groups').doc(groupId).update({
      name,
      description: description || '',
      updatedAt: getCurrentUnixTime(),
    })

    return NextResponse.json({
      success: true,
      message: 'Group updated successfully',
    })
  } catch (error) {
    console.error('Error updating group:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
})

// Delete specific group
export const DELETE = withAuth(async (req, { params }: { params: { groupId: string } }) => {
  try {
    const { groupId } = params

    // Check if group exists
    const groupDoc = await adminDb.collection('groups').doc(groupId).get()
    if (!groupDoc.exists) {
      return NextResponse.json({ error: 'Group not found' }, { status: 404 })
    }

    // Delete group
    await adminDb.collection('groups').doc(groupId).delete()

    return NextResponse.json({
      success: true,
      message: 'Group deleted successfully',
    })
  } catch (error) {
    console.error('Error deleting group:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
})
