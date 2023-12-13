'use client' // Error components must be Client Components
 
import Link from 'next/link'
import { useState, useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const [errorMessage, setErrorMessage] = useState('Something went wrong!')
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
    if (error.message === 'auth') {
      setErrorMessage('You are not authorised to view this page! Please sign in')
    }
  }, [error])
 
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24">
      <h2>{errorMessage}</h2>
      {error.message === 'auth' ? <Link href="/login" className="underline text-blue-700">
        Sign In
      </Link> : <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try Again
      </button>}
    </main>
  )
}