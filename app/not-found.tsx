// app/not-found.tsx
import Link from 'next/link'
import Logo from '@/components/header/Logo'
export default function NotFound() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
        <Link href="/" className="cursor-pointer">
          <Logo />
        </Link>

        <h1 className="text-4xl font-bold text-red-900">404</h1>
        <p className="text-lg text-gray-700 mb-4">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          href="/"
          className="text-[var(--secondary-color)] hover:underline cursor-pointer"
        >
          Go back to the homepage
        </Link>
      </div>
    </>
  )
}
