'use client'

import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState } from 'react'

export function FlipWords({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), interval)
    return () => clearInterval(id)
  }, [words.length, interval])

  return (
    <span className="relative inline-block">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[i]}
          initial={{ opacity: 0, y: 10, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(6px)' }}
          transition={{ duration: 0.3 }}
          className="gradient-text inline-block font-semibold"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
