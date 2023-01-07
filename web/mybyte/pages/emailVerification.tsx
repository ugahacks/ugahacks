import Link from 'next/link'
import React from 'react'

export default function EmailVerification() {
  return (
    <div>
        <h1>We have sent an email to verify your account</h1>
        <h3><Link href="/login">Go to login</Link></h3>
    </div>
  )
}
