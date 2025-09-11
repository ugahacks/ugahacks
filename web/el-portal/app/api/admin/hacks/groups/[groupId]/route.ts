import { db } from '@/lib/firebase-admin'
import { Group } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
    request: NextRequest,
    { params }: { params: { groupId: string } }
) {
    try {
        const { groupId } = params

        const groupDoc = await db.collection('el-portal-groups').doc(groupId).get()
        
        if (!groupDoc.exists) {
            return NextResponse.json(
                { error: 'Group not found' },
                { status: 404 }
            )
        }

        const groupData = groupDoc.data()
        const group: Group = {
            id: groupDoc.id,
            ...groupData
        } as Group

        return NextResponse.json({
            success: true,
            data: group
        })

    } catch (error) {
        console.error('Error fetching group:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function PUT(
    request: NextRequest,
    { params }: { params: { groupId: string } }
) {
    try {
        const { groupId } = params
        const { name, description } = await request.json()

        if (!name) {
            return NextResponse.json(
                { error: 'Name is required' },
                { status: 400 }
            )
        }

        const updateData = {
            name,
            description: description || '',
            updatedAt: Date.now()
        }

        await db.collection('el-portal-groups').doc(groupId).update(updateData)

        return NextResponse.json({
            success: true,
            message: 'Group updated successfully'
        })

    } catch (error) {
        console.error('Error updating group:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function DELETE(
    request: NextRequest,
    { params }: { params: { groupId: string } }
) {
    try {
        const { groupId } = params

        // Check if group exists
        const groupDoc = await db.collection('el-portal-groups').doc(groupId).get()
        if (!groupDoc.exists) {
            return NextResponse.json(
                { error: 'Group not found' },
                { status: 404 }
            )
        }

        // Delete the group
        await db.collection('el-portal-groups').doc(groupId).delete()

        return NextResponse.json({
            success: true,
            message: 'Group deleted successfully'
        })

    } catch (error) {
        console.error('Error deleting group:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}