'use client'

import Image from 'next/image'
import squareImage from './square.jpg'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Square() {
  const [loaded, setLoaded] = useState(false)
  return (
    <motion.div
      className="max-w-3xl"
      initial="hidden"
      animate={loaded ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <figure className="animate-beat">
        <Image
          className="h-full w-full object-contain"
          src={squareImage}
          alt="Software Engineer"
          priority
          loading="eager"
          onLoad={() => setLoaded(true)}
        />
        <figcaption className="-translate-x-[0.4rem] -translate-y-6 text-right font-neutral text-base font-bold sm:-translate-y-7 sm:text-xl">
          Software Engineer
        </figcaption>
      </figure>
    </motion.div>
  )
}
