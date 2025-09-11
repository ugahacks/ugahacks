'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function TestPage() {
    const router = useRouter()

    const handleClick = () => {
        console.log('Button clicked!')
        alert('Button clicked!')
    }

    const handleNavigate = () => {
        console.log('Navigating to login...')
        router.push('/auth/login')
    }

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-4">Test Page</h1>

            <div className="space-y-4">
                <Button onClick={handleClick}>
                    Test Button Click
                </Button>

                <Button onClick={handleNavigate} variant="outline">
                    Navigate to Login
                </Button>

                <a href="/auth/login" className="block">
                    <Button variant="secondary">
                        Direct Link to Login
                    </Button>
                </a>
            </div>
        </div>
    )
}
