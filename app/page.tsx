import { Counter } from "@/components/counter"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6">
      <header className="flex flex-col items-center gap-3 text-center">
        <span className="rounded-full border border-border px-3 py-1 text-xs uppercase tracking-widest text-muted">
          Next.js Test App
        </span>
        <h1 className="text-balance text-4xl font-semibold sm:text-5xl">
          Hello from your one-page app
        </h1>
        <p className="max-w-md text-pretty leading-relaxed text-muted">
          A minimal Next.js App Router setup with Tailwind CSS. Use the counter
          below to confirm client interactivity is working.
        </p>
      </header>

      <Counter />

      <footer className="text-sm text-muted">
        Edit <code className="font-mono text-foreground">app/page.tsx</code> to get started.
      </footer>
    </main>
  )
}
