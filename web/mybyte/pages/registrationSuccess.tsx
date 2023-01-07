import Link from 'next/link'
import React from 'react'

export default function RegistrationSuccess() {
  return (
    <div>
        <h1>You have successfully registered for UGA Hacks!</h1>
        <p><Link href="events/hacks-8">Return to event page</Link></p>
    </div>
  )
}
