export const metadata = {
  title: "About | Simple Test App",
  description: "A simple second page for testing Next.js routing.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <p className="font-mono text-sm uppercase tracking-widest text-primary">Page two</p>
      <h1 className="text-4xl font-semibold sm:text-5xl">About this test</h1>
      <p className="max-w-md leading-relaxed text-muted">
        If you can see this page, Next.js routing is working.
      </p>
      <a
        href="/"
        className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary"
      >
        Back home
      </a>
    </main>
  )
}
