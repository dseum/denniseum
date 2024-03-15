'use client'
import Copyright from '@/lib/components/Copyright'
import { pages } from '@/lib/constants'
import { cn } from '@/lib/utils'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Nav() {
  const pathname = usePathname()
  const [opened, setOpened] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  useEffect(() => {
    setOpened(false)
  }, [pathname])
  return (
    <>
      <nav className="fixed top-0 z-20 flex h-16 w-full justify-between border-b-2 border-black bg-white px-4 md:border-b md:px-6">
        <div className="hidden items-center gap-2 md:flex">
          {pages.map((page, i) => (
            <Link
              className={cn(
                'px-2 transition-all duration-300',
                pathname === page.href && 'bg-indigo-100',
                hovered !== null &&
                  (i === hovered ? 'bg-indigo-100' : 'opacity-40'),
              )}
              key={page.href}
              href={page.href}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {page.name}
            </Link>
          ))}
        </div>
        <div className="flex items-center font-bold italic md:text-2xl md:font-normal lg:flex lg:text-2xl">
          <Copyright />
        </div>
        <div className="flex items-center md:hidden">
          <button
            className="flex h-9 w-9 items-center justify-center border-2 border-black md:hidden"
            onClick={() => setOpened(!opened)}
          >
            <div className="h-2 w-2 rounded-full bg-black" />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="h-main fixed left-0 top-16 z-20 w-full space-y-6 overflow-y-scroll bg-white p-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {pages.map((page, i) => (
              <Link
                className={cn(
                  'flex h-12 items-center border border-black px-3 transition-all duration-300',
                  pathname === page.href && 'bg-indigo-100',
                  hovered !== null &&
                    (i === hovered ? 'bg-indigo-100' : 'opacity-40'),
                )}
                key={page.href}
                href={page.href}
              >
                <div className="shrink-0 whitespace-nowrap">{page.name}</div>
                <div className="flex h-full grow items-center pl-3">
                  <div className="w-full border-b border-black" />
                </div>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
