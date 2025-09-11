'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { ArrowLeft, Building, Save } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface Group {
    id: string
    name: string
    description: string
    adminIds: string[]
    createdAt: number
    updatedAt: number
}

export default function EditGroupPage({ params }: { params: { groupId: string } }) {
    const [group, setGroup] = useState<Group | null>(null)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    })
    const [isLoading, setIsLoading] = useState(true)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const router = useRouter()

    useEffect(() => {
        loadGroup()
    }, [params.groupId])

    const loadGroup = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/hacks/groups/${params.groupId}`, {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.ok) {
                const data = await response.json()
                setGroup(data.data)
                setFormData({
                    name: data.data.name,
                    description: data.data.description || '',
                })
            } else {
                toast.error('Failed to load group')
                router.push('/admin/hacks')
            }
        } catch (error) {
            console.error('Error loading group:', error)
            toast.error('Error loading group')
            router.push('/admin/hacks')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const token = localStorage.getItem('token')
            const response = await fetch(`/api/admin/hacks/groups/${params.groupId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (response.ok) {
                toast.success('Group updated successfully!')
                router.push('/admin/hacks')
            } else {
                toast.error(data.error || 'Failed to update group')
            }
        } catch (error) {
            console.error('Error updating group:', error)
            toast.error('Error updating group')
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading group...</p>
                </div>
            </div>
        )
    }

    if (!group) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Group Not Found</h1>
                    <p className="text-gray-600 mb-4">The group you're looking for doesn't exist.</p>
                    <Button onClick={() => router.push('/admin/hacks')}>
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Admin Portal
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
                    <div className="flex items-center py-4">
                        <Button
                            variant="ghost"
                            onClick={() => router.push('/admin/hacks')}
                            className="mr-4"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back
                        </Button>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                Edit Group
                            </h1>
                            <p className="text-gray-600">Update group information</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center">
                            <Building className="h-5 w-5 mr-2" />
                            Group Details
                        </CardTitle>
                        <CardDescription>
                            Update the details for this group
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    Group Name *
                                </label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Enter group name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div>
                                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                                    Description
                                </label>
                                <Textarea
                                    id="description"
                                    name="description"
                                    placeholder="Enter group description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows={3}
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-medium text-gray-900 mb-2">Group Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                    <div>
                                        <span className="font-medium">Group ID:</span> {group.id}
                                    </div>
                                    <div>
                                        <span className="font-medium">Admins:</span> {group.adminIds.length}
                                    </div>
                                    <div>
                                        <span className="font-medium">Created:</span> {new Date(group.createdAt * 1000).toLocaleDateString()}
                                    </div>
                                    <div>
                                        <span className="font-medium">Last Updated:</span> {new Date(group.updatedAt * 1000).toLocaleDateString()}
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => router.push('/admin/hacks')}
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
                                            Update Group
                                        </>
                                    )}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
