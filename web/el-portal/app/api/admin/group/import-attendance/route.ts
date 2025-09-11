import { db } from '@/lib/firebase-admin'
import { Attendance } from '@/types'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { eventId, myIds, hours, notes } = await request.json()

        if (!eventId || !myIds || !Array.isArray(myIds)) {
            return NextResponse.json(
                { error: 'Event ID and MyID list are required' },
                { status: 400 }
            )
        }

        // Get event details
        const eventDoc = await db.collection('el-portal-events').doc(eventId).get()
        if (!eventDoc.exists) {
            return NextResponse.json(
                { error: 'Event not found' },
                { status: 404 }
            )
        }

        const eventData = eventDoc.data()
        const eventName = eventData?.name || 'Unknown Event'

        // Get users by MyID
        const usersSnapshot = await db.collection('el-portal')
            .where('myId', 'in', myIds)
            .get()

        const userIds = usersSnapshot.docs.map(doc => doc.id)
        const foundMyIds = usersSnapshot.docs.map(doc => doc.data().myId)

        // Find missing MyIDs
        const missingMyIds = myIds.filter(myId => !foundMyIds.includes(myId))

        // Create attendance records
        const batch = db.batch()
        const attendanceRecords = []

        for (const userId of userIds) {
            const userDoc = usersSnapshot.docs.find(doc => doc.id === userId)
            const userData = userDoc?.data()

            const attendanceData = {
                eventId,
                eventName,
                userId,
                userEmail: userData?.email,
                userMyId: userData?.myId,
                userName: `${userData?.firstName} ${userData?.lastName}`,
                hours: hours || 1,
                notes: notes || '',
                attendedAt: Date.now(),
                createdAt: Date.now(),
                updatedAt: Date.now()
            }

            const attendanceRef = db.collection('el-portal-attendance').doc()
            batch.set(attendanceRef, attendanceData)
            attendanceRecords.push({
                id: attendanceRef.id,
                ...attendanceData
            })
        }

        await batch.commit()

        return NextResponse.json({
            success: true,
            message: `Successfully imported ${attendanceRecords.length} attendance records`,
            attendanceRecords,
            missingMyIds,
            summary: {
                total: myIds.length,
                imported: attendanceRecords.length,
                missing: missingMyIds.length
            }
        })

    } catch (error) {
        console.error('Error importing attendance:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
