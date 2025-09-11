'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Event } from '@/types'
import { ArrowLeft, Upload, Users } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ImportAttendancePage() {
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState('')
    const [myIds, setMyIds] = useState('')
    const [hours, setHours] = useState('1')
    const [notes, setNotes] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = async () => {
        try {
            const response = await fetch('/api/events')
            if (response.ok) {
                const data = await response.json()
                setEvents(data.events || [])
            }
        } catch (error) {
            console.error('Error loading events:', error)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResult(null)

        if (!selectedEvent || !myIds.trim()) {
            alert('Please select an event and enter MyIDs')
            setIsSubmitting(false)
            return
        }

        // Parse MyIDs (comma-separated or newline-separated)
        const myIdList = myIds
            .split(/[,\n]/)
            .map(id => id.trim())
            .filter(id => id.length > 0)

        if (myIdList.length === 0) {
            alert('Please enter at least one MyID')
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/admin/group/import-attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventId: selectedEvent,
                    myIds: myIdList,
                    hours: parseFloat(hours),
                    notes: notes.trim()
                }),
            })

            const data = await response.json()

            if (response.ok) {
                setResult(data)
                alert(`Successfully imported ${data.summary.imported} attendance records`)
            } else {
                alert(data.error || 'Failed to import attendance')
            }
        } catch (error) {
            console.error('Error importing attendance:', error)
            alert('Failed to import attendance')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <Link href="/admin/group" className="inline-flex items-center text-gray-600 hover:text-gray-900 mr-6">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Group Admin
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-900">Import Attendance</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Import Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Upload className="h-6 w-6 mr-2" />
                                Import Attendance
                            </CardTitle>
                            <CardDescription>
                                Import attendance records by MyID for a specific event
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="event" className="block text-sm font-medium text-gray-700 mb-2">
                                        Select Event
                                    </label>
                                    <select
                                        id="event"
                                        value={selectedEvent}
                                        onChange={(e) => setSelectedEvent(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                    >
                                        <option value="">Choose an event...</option>
                                        {events.map((event) => (
                                            <option key={event.id} value={event.id}>
                                                {event.name} - {new Date(event.date).toLocaleDateString()}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="myIds" className="block text-sm font-medium text-gray-700 mb-2">
                                        MyIDs
                                    </label>
                                    <Textarea
                                        id="myIds"
                                        placeholder="Enter MyIDs separated by commas or new lines&#10;Example: 12345, 67890, 11111"
                                        value={myIds}
                                        onChange={(e) => setMyIds(e.target.value)}
                                        required
                                        disabled={isSubmitting}
                                        rows={6}
                                    />
                                    <p className="text-sm text-gray-500 mt-1">
                                        Separate multiple MyIDs with commas or new lines
                                    </p>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-2">
                                            Hours
                                        </label>
                                        <Input
                                            id="hours"
                                            type="number"
                                            min="0.5"
                                            max="24"
                                            step="0.5"
                                            value={hours}
                                            onChange={(e) => setHours(e.target.value)}
                                            required
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                                            Notes (Optional)
                                        </label>
                                        <Input
                                            id="notes"
                                            type="text"
                                            placeholder="Import notes"
                                            value={notes}
                                            onChange={(e) => setNotes(e.target.value)}
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Importing...
                                        </>
                                    ) : (
                                        <>
                                            <Upload className="h-4 w-4 mr-2" />
                                            Import Attendance
                                        </>
                                    )}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Instructions */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="h-6 w-6 mr-2" />
                                Instructions
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h4 className="font-medium text-gray-900 mb-2">How to Import Attendance:</h4>
                                <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
                                    <li>Select the event for which you want to import attendance</li>
                                    <li>Enter MyIDs of students who attended (one per line or comma-separated)</li>
                                    <li>Set the number of hours for this event</li>
                                    <li>Add optional notes about the attendance</li>
                                    <li>Click "Import Attendance" to create records</li>
                                </ol>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                <h4 className="text-sm font-medium text-blue-800 mb-2">Tips:</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• MyIDs should match exactly what students used during registration</li>
                                    <li>• Students must be registered in the system for attendance to be recorded</li>
                                    <li>• You can import attendance for past events</li>
                                    <li>• Missing MyIDs will be reported after import</li>
                                </ul>
                            </div>

                            {result && (
                                <div className="bg-green-50 border border-green-200 rounded-md p-4">
                                    <h4 className="text-sm font-medium text-green-800 mb-2">Import Results:</h4>
                                    <div className="text-sm text-green-700 space-y-1">
                                        <p>• Total MyIDs: {result.summary.total}</p>
                                        <p>• Successfully imported: {result.summary.imported}</p>
                                        <p>• Missing MyIDs: {result.summary.missing}</p>
                                        {result.missingMyIds.length > 0 && (
                                            <div className="mt-2">
                                                <p className="font-medium">Missing MyIDs:</p>
                                                <p className="text-xs">{result.missingMyIds.join(', ')}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
