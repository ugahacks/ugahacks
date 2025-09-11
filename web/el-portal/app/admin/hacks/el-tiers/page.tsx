'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, Plus, Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

interface ELTierAssignment {
    id: string
    userId: string
    tierLevel: 'tier1' | 'tier2' | 'tier3'
    tierName: string
    requiredClubHours: number
    requiredAdditionalHours: number
    totalRequiredHours: number
    assignedBy: string
    notes?: string
    createdAt: number
    updatedAt: number
}

export default function ELTiersPage() {
    const [tiers, setTiers] = useState<ELTierAssignment[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    useEffect(() => {
        loadELTiers()
    }, [])

    const loadELTiers = async () => {
        try {
            const token = localStorage.getItem('token')
            const response = await fetch('/api/admin/el-tiers', {
                headers: { Authorization: `Bearer ${token}` }
            })

            if (response.ok) {
                const data = await response.json()
                setTiers(data.data || [])
            } else {
                toast.error('Failed to load EL tiers')
            }
        } catch (error) {
            console.error('Error loading EL tiers:', error)
            toast.error('Error loading EL tiers')
        } finally {
            setIsLoading(false)
        }
    }

    const getTierColor = (tierLevel: string) => {
        switch (tierLevel) {
            case 'tier1':
                return 'bg-green-100 text-green-800 border-green-200'
            case 'tier2':
                return 'bg-yellow-100 text-yellow-800 border-yellow-200'
            case 'tier3':
                return 'bg-red-100 text-red-800 border-red-200'
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200'
        }
    }

    const filteredTiers = tiers.filter(tier =>
        tier.tierName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tier.userId.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">Loading EL tiers...</p>
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
                                EL Tier Assignments
                            </h1>
                            <p className="text-gray-600">Manage student EL tier assignments</p>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search tiers..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            />
                        </div>
                    </div>
                    <Button onClick={() => router.push('/admin/hacks/el-tiers/assign')}>
                        <Plus className="h-4 w-4 mr-2" />
                        Assign Tier
                    </Button>
                </div>

                {filteredTiers.length === 0 ? (
                    <Card>
                        <CardContent className="text-center py-8">
                            <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No EL Tier Assignments</h3>
                            <p className="text-gray-500 mb-4">No EL tiers have been assigned yet.</p>
                            <Button onClick={() => router.push('/admin/hacks/el-tiers/assign')}>
                                <Plus className="h-4 w-4 mr-2" />
                                Assign First Tier
                            </Button>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredTiers.map((tier) => (
                            <Card key={tier.id}>
                                <CardHeader>
                                    <CardTitle className="flex items-center justify-between">
                                        <span className={`px-2 py-1 rounded-full text-sm font-medium border ${getTierColor(tier.tierLevel)}`}>
                                            {tier.tierName}
                                        </span>
                                        <span className="text-sm text-gray-500">#{tier.id.slice(-6)}</span>
                                    </CardTitle>
                                    <CardDescription>
                                        User ID: {tier.userId}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p><span className="font-medium">Club Hours:</span> {tier.requiredClubHours}</p>
                                        <p><span className="font-medium">Additional Hours:</span> {tier.requiredAdditionalHours}</p>
                                        <p><span className="font-medium">Total Required:</span> {tier.totalRequiredHours}</p>
                                        <p><span className="font-medium">Assigned:</span> {new Date(tier.createdAt * 1000).toLocaleDateString()}</p>
                                        {tier.notes && (
                                            <p><span className="font-medium">Notes:</span> {tier.notes}</p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
