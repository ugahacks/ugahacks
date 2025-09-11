import { db } from '@/lib/firebase-admin'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const userId = searchParams.get('userId')

        if (!userId) {
            return NextResponse.json(
                { error: 'User ID is required' },
                { status: 400 }
            )
        }

        // Get user data
        const userDoc = await db.collection('el-portal').doc(userId).get()
        if (!userDoc.exists) {
            return NextResponse.json(
                { error: 'User not found' },
                { status: 404 }
            )
        }

        const userData = userDoc.data()

        // Get attendance data
        const attendanceSnapshot = await db.collection('attendance')
            .where('userId', '==', userId)
            .get()

        const attendanceData = attendanceSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            attendedAt: new Date(doc.data().attendedAt).toISOString()
        }))

        // Get reflections data
        const reflectionsSnapshot = await db.collection('reflections')
            .where('userId', '==', userId)
            .get()

        const reflectionsData = reflectionsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
            submittedAt: new Date(doc.data().submittedAt).toISOString()
        }))

        // Create CSV for GivePulse submission
        const csvData = [
            // Header
            'Student Name,Email,MyID,Organization,Event Name,Date,Hours,Reflection Status,Reflection Word Count',
            // Data rows
            ...attendanceData.map(record => {
                const reflection = reflectionsData.find(r => r.eventId === record.eventId)
                return [
                    `"${userData?.firstName} ${userData?.lastName}"`,
                    `"${userData?.email}"`,
                    `"${userData?.myId}"`,
                    `"${userData?.organization}"`,
                    `"${record.eventName}"`,
                    `"${new Date(record.attendedAt).toLocaleDateString()}"`,
                    record.hours,
                    reflection ? 'Completed' : 'Not Submitted',
                    reflection ? reflection.wordCount : 0
                ].join(',')
            })
        ].join('\n')

        return new NextResponse(csvData, {
            headers: {
                'Content-Type': 'text/csv',
                'Content-Disposition': `attachment; filename="${userData?.firstName}-${userData?.lastName}-el-progress.csv"`
            }
        })

    } catch (error) {
        console.error('Error exporting student data:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
