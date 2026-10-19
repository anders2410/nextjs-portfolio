'use client'

import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

export type TimelineItem = { role: string; org: string; period: string; text: string }

export function Timeline({ items }: { items: TimelineItem[] }) {
  const ref = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] })
  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <ol ref={ref} className="relative ml-2 space-y-12 pl-8">
      <div className="absolute top-0 left-0 h-full w-px bg-line">
        <motion.div
          style={{ height }}
          className="w-px bg-gradient-to-b from-accent-2 to-accent"
        />
      </div>
      {items.map((e) => (
        <li
          key={e.role + e.org}
          className="relative before:absolute before:top-2.5 before:-left-[2.375rem] before:size-3 before:rounded-full before:border-2 before:border-accent before:bg-bg"
        >
          <p className="font-mono text-sm text-muted">{e.period}</p>
          <h3 className="mt-1 text-2xl font-semibold">
            {e.role} <span className="font-normal text-muted">· {e.org}</span>
          </h3>
          <p className="mt-2 max-w-prose text-muted">{e.text}</p>
        </li>
      ))}
    </ol>
  )
}
