"use client"

import { useState } from "react"

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center gap-6">
      <p className="font-mono text-6xl tabular-nums" aria-live="polite">
        {count}
      </p>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setCount((c) => c - 1)}
          className="rounded-md border border-border bg-card px-5 py-2 text-lg text-foreground transition-colors hover:border-primary"
        >
          Decrease
        </button>
        <button
          type="button"
          onClick={() => setCount(0)}
          className="rounded-md border border-border bg-card px-5 py-2 text-lg text-muted transition-colors hover:border-primary hover:text-foreground"
        >
          Reset
        </button>
        <button
          type="button"
          onClick={() => setCount((c) => c + 1)}
          className="rounded-md bg-primary px-5 py-2 text-lg font-medium text-background transition-opacity hover:opacity-90"
        >
          Increase
        </button>
      </div>
    </div>
  )
}
