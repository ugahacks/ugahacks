'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { AuthUser, Event } from '@/types'
import { ArrowLeft, FileText } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function ReflectionPage() {
    const [user, setUser] = useState<AuthUser | null>(null)
    const [events, setEvents] = useState<Event[]>([])
    const [selectedEvent, setSelectedEvent] = useState<string>('')
    const [reflection, setReflection] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        const userData = localStorage.getItem('user')

        if (!token || !userData) {
            router.push('/auth/login')
            return
        }

        try {
            const parsedUser = JSON.parse(userData)
            setUser(parsedUser)
            loadEvents()
        } catch (error) {
            console.error('Error parsing user data:', error)
            router.push('/auth/login')
        }
    }, [router])

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

        if (!selectedEvent || !reflection.trim()) {
            alert('Please select an event and write a reflection')
            setIsSubmitting(false)
            return
        }

        // Basic word count validation (100 words minimum)
        const wordCount = reflection.trim().split(/\s+/).length
        if (wordCount < 100) {
            alert(`Reflection must be at least 100 words. Current: ${wordCount} words`)
            setIsSubmitting(false)
            return
        }

        try {
            const response = await fetch('/api/reflections', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    eventId: selectedEvent,
                    userId: user?.id,
                    content: reflection.trim(),
                    wordCount
                }),
            })

            const data = await response.json()

            if (response.ok) {
                alert('Reflection submitted successfully!')
                router.push('/student')
            } else {
                alert(data.error || 'Failed to submit reflection')
            }
        } catch (error) {
            console.error('Error submitting reflection:', error)
            alert('Failed to submit reflection')
        } finally {
            setIsSubmitting(false)
        }
    }

    const wordCount = reflection.trim().split(/\s+/).length
    const isWordCountValid = wordCount >= 100

    if (!user) {
        return null
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-6">
                        <div className="flex items-center">
                            <Link href="/student" className="inline-flex items-center text-gray-600 hover:text-gray-900 mr-6">
                                <ArrowLeft className="h-4 w-4 mr-2" />
                                Back to Student Portal
                            </Link>
                            <h1 className="text-3xl font-bold text-gray-900">Submit Reflection</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <FileText className="h-6 w-6 mr-2" />
                            Event Reflection
                        </CardTitle>
                        <CardDescription>
                            Submit a reflection for an event you attended. Reflections must be at least 100 words and submitted before the event's due date.
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
                                <label htmlFor="reflection" className="block text-sm font-medium text-gray-700 mb-2">
                                    Reflection
                                </label>
                                <Textarea
                                    id="reflection"
                                    placeholder="Write your reflection here... (minimum 100 words)"
                                    value={reflection}
                                    onChange={(e) => setReflection(e.target.value)}
                                    required
                                    disabled={isSubmitting}
                                    rows={10}
                                    className="w-full"
                                />
                                <div className="mt-2 flex justify-between items-center">
                                    <p className="text-sm text-gray-500">
                                        Word count: {wordCount} / 100 minimum
                                    </p>
                                    <span className={`text-sm font-medium ${isWordCountValid ? 'text-green-600' : 'text-red-600'
                                        }`}>
                                        {isWordCountValid ? '✓ Valid' : '✗ Too short'}
                                    </span>
                                </div>
                            </div>

                            <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
                                <h4 className="text-sm font-medium text-blue-800 mb-2">Reflection Guidelines</h4>
                                <ul className="text-sm text-blue-700 space-y-1">
                                    <li>• Describe what you learned from the event</li>
                                    <li>• Explain how it relates to your academic or career goals</li>
                                    <li>• Share any insights or takeaways you gained</li>
                                    <li>• Reflect on how you might apply what you learned</li>
                                </ul>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={isSubmitting || !selectedEvent || !isWordCountValid}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <FileText className="h-4 w-4 mr-2" />
                                        Submit Reflection
                                    </>
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
