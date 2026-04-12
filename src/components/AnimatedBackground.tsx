'use client'

import { motion } from 'framer-motion'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-zinc-50 dark:bg-black transition-colors duration-500" />
      
      <div className="absolute inset-0 opacity-30 dark:opacity-20 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(20,184,166,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(20,184,166,0.1)_0%,transparent_70%)] transform-gpu will-change-transform"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_70%)] dark:bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)] transform-gpu will-change-transform"
      />
    </div>
  )
}
