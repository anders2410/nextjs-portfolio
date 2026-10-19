import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center gap-4 px-6">
      <p className="font-mono text-accent">404</p>
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <Link href="/" className="underline underline-offset-4 hover:text-accent">
        Back home
      </Link>
    </main>
  )
}
