'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ArrowLeft, Calendar, Save } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Event {
    id: string
    name: string
    date: number
    hours: number
    eventType: string
    location: string
    time: string
    isELCreditEligible: boolean
}

export default function EditEventPage({ params }: { params: { eventId: string } }) {
    const [event, setEvent] = useState<Event | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        hours: '1',
        eventType: 'General',
        location: '',
        time: '',
        isELCreditEligible: true,
    })
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    const eventTypes = [
        'General',
        'Club Meeting',
        'Workshop',
        'Hackathon',
        'Social Event',
        'Educational Session',
        'Other'
    ]

    const loadEvent = useCallback(async () => {
        try {
            const response = await fetch(`/api/events/${params.eventId}`)
            if (response.ok) {
                const data = await response.json()
                setEvent(data.event)
                setFormData({
                    name: data.event.name,
                    date: new Date(data.event.date).toISOString().split('T')[0],
                    hours: data.event.hours.toString(),
                    eventType: data.event.eventType || 'General',
                    location: data.event.location || '',
                    time: data.event.time || '',
                    isELCreditEligible: data.event.isELCreditEligible || false,
                })
            } else {
                toast.error('Failed to load event')
                router.push('/admin/group')
            }
        } catch (error) {
            console.error('Error loading event:', error)
            toast.error('Error loading event')
            router.push('/admin/group')
        } finally {
            setIsLoading(false)
        }
    }, [params.eventId, router])

    useEffect(() => {
        loadEvent()
    }, [loadEvent])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const response = await fetch(`/api/events/${params.eventId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                toast.success('Event updated successfully!')
                router.push('/admin/group')
            } else {
                toast.error(data.error || 'Failed to update event')
            }
        } catch (error) {
            console.error('Error updating event:', error)
            toast.error('Error updating event')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading event...</p>
                </div>
            </div>
        )
    }

    if (!event) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Event Not Found</h1>
                    <p className="text-gray-600 mb-4">The event you're looking for doesn't exist.</p>
                    <Button onClick={() => router.push('/admin/group')}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Group Admin
                    </Button>
                </div>
            </div>
        )
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
                            <h1 className="text-3xl font-bold text-gray-900">Edit Event</h1>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Calendar className="h-6 w-6 mr-2" />
                            Edit Event
                        </CardTitle>
                        <CardDescription>
                            Update the details for this event
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Event Name
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Enter event name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Date
                                    </label>
                                    <Input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                                        Time (Optional)
                                    </label>
                                    <Input
                                        id="time"
                                        name="time"
                                        type="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
                                        Event Type
                                    </label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                                    >
                                        {eventTypes.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="hours" className="block text-sm font-medium text-gray-700 mb-2">
                                        Hours
                                    </label>
                                    <Input
                                        id="hours"
                                        name="hours"
                                        type="number"
                                        min="0.5"
                                        max="24"
                                        step="0.5"
                                        placeholder="1"
                                        value={formData.hours}
                                        onChange={handleChange}
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                                    Location (Optional)
                                </label>
                                <Input
                                    id="location"
                                    name="location"
                                    type="text"
                                    placeholder="Enter event location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="flex items-center">
                                <input
                                    id="isELCreditEligible"
                                    name="isELCreditEligible"
                                    type="checkbox"
                                    checked={formData.isELCreditEligible}
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                                />
                                <label htmlFor="isELCreditEligible" className="ml-2 block text-sm text-gray-900">
                                    EL Credit Eligible
                                </label>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push('/admin/group')}
                                    disabled={isSubmitting}
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                            Updating...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="h-4 w-4 mr-2" />
                                            Update Event
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </main>
        </div>
    )
}
