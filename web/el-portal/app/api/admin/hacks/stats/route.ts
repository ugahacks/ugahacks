import { db } from '@/lib/firebase-admin'
import { SystemStats } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        // Get total users
        const usersSnapshot = await db.collection('el-portal').get()
        const totalUsers = usersSnapshot.size

        // Get total events
        const eventsSnapshot = await db.collection('el-portal-events').get()
        const totalEvents = eventsSnapshot.size

        // Get total hours from attendance records
        const attendanceSnapshot = await db.collection('el-portal-attendance').get()
        let totalHours = 0
        attendanceSnapshot.forEach((doc) => {
            const data = doc.data()
            totalHours += data.hours || 0
        })

        // Get total reflections
        const reflectionsSnapshot = await db.collection('el-portal-reflections').get()
        const totalReflections = reflectionsSnapshot.size

        // Get total groups
        const groupsSnapshot = await db.collection('el-portal-groups').get()
        const totalGroups = groupsSnapshot.size

        const stats: SystemStats = {
            totalUsers,
            totalEvents,
            totalHours,
            totalReflections,
            totalGroups,
            lastUpdated: Date.now()
        }

        return NextResponse.json({
            success: true,
            stats
        })

    } catch (error) {
        console.error('Error fetching stats:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}