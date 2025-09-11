import { db } from '@/lib/firebase-admin'
import { Group } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const groupsRef = db.collection('el-portal-groups')
        const snapshot = await groupsRef.get()
        
        const groups: Group[] = []
        snapshot.forEach((doc) => {
            groups.push({
                id: doc.id,
                ...doc.data()
            } as Group)
        })

        return NextResponse.json({
            success: true,
            groups
        })

    } catch (error) {
        console.error('Error fetching groups:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}

export async function POST(request: NextRequest) {
    try {
        const { name, description, organization } = await request.json()

        if (!name || !description || !organization) {
            return NextResponse.json(
                { error: 'Name, description, and organization are required' },
                { status: 400 }
            )
        }

        const groupData = {
            name,
            description,
            organization,
            admins: [],
            eventCount: 0,
            memberCount: 0,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }

        const docRef = await db.collection('el-portal-groups').add(groupData)

        return NextResponse.json({
            success: true,
            group: {
                id: docRef.id,
                ...groupData
            }
        })

    } catch (error) {
        console.error('Error creating group:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}