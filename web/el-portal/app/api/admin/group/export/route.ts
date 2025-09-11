import { db } from '@/lib/firebase-admin'
import { createObjectCsvWriter } from 'csv-writer'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const type = searchParams.get('type') || 'attendance'

        if (type === 'attendance') {
            // Export attendance data
            const attendanceSnapshot = await db.collection('attendance').get()
            const attendanceData = attendanceSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                attendedAt: new Date(doc.data().attendedAt).toISOString(),
                createdAt: new Date(doc.data().createdAt).toISOString()
            }))

            const csv = attendanceData.map(record => ({
                'Event Name': record.eventName,
                'Student Name': record.userName,
                'Email': record.userEmail,
                'MyID': record.userMyId,
                'Hours': record.hours,
                'Attended At': new Date(record.attendedAt).toLocaleString(),
                'Notes': record.notes || ''
            })).join('\n')

            const headers = 'Event Name,Student Name,Email,MyID,Hours,Attended At,Notes\n'

            return new NextResponse(headers + csv, {
                headers: {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="attendance-export.csv"'
                }
            })
        } else if (type === 'reflections') {
            // Export reflections data
            const reflectionsSnapshot = await db.collection('reflections').get()
            const reflectionsData = reflectionsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
                submittedAt: new Date(doc.data().submittedAt).toISOString(),
                createdAt: new Date(doc.data().createdAt).toISOString()
            }))

            const csv = reflectionsData.map(record => ({
                'Event Name': record.eventName,
                'Student Name': record.userName || 'Unknown',
                'Email': record.userEmail || 'Unknown',
                'MyID': record.userMyId || 'Unknown',
                'Word Count': record.wordCount,
                'Status': record.status,
                'Submitted At': new Date(record.submittedAt).toLocaleString(),
                'Content': record.content
            })).join('\n')

            const headers = 'Event Name,Student Name,Email,MyID,Word Count,Status,Submitted At,Content\n'

            return new NextResponse(headers + csv, {
                headers: {
                    'Content-Type': 'text/csv',
                    'Content-Disposition': 'attachment; filename="reflections-export.csv"'
                }
            })
        }

        return NextResponse.json(
            { error: 'Invalid export type. Use "attendance" or "reflections"' },
            { status: 400 }
        )

    } catch (error) {
        console.error('Error exporting data:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
