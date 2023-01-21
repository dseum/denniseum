import Link from 'next/link'
import {
  CubeIcon,
  MusicalNoteIcon,
  BookmarkSquareIcon,
  AtSymbolIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { classNames, hashKey } from 'impulse-utils'
import { useEffect, useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const pages = [
  {
    name: 'Home',
    href: '/',
    icon: CubeIcon
  },
  {
    name: 'Projects',
    href: '/projects',
    icon: CubeIcon
  },
  {
    name: 'Cello',
    href: '/cello',
    icon: MusicalNoteIcon
  },
  {
    name: 'Journal',
    href: '/journal',
    icon: BookmarkSquareIcon
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: AtSymbolIcon
  }
]

export default function Menu() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', latest => {
    if (scrollY.prev < latest) {
      setOpen(false)
    }
  })
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  const _template = {
    pages: pages.map(page => {
      return (
        <motion.div
          className="flex"
          key={hashKey(page.href)}
          variants={{
            open: {
              opacity: 1,
              display: 'flex'
            },
            closed: {
              opacity: 0,
              transitionEnd: {
                display: 'none'
              }
            }
          }}
        >
          <Link
            className={classNames(
              'flex h-9 flex-shrink items-center justify-start rounded border border-gray-700 bg-[#f4f0e8] px-2 text-xl font-bold uppercase tracking-wider transition-colors duration-200 hover:bg-[#e7dfce]',
              pathname === page.href ? 'text-gray-900' : 'text-gray-500'
            )}
            href={page.href}
          >
            {page.name}
          </Link>
        </motion.div>
      )
    })
  }
  return (
    <div className="fixed bottom-3 left-3 z-10 lg:bottom-6 lg:left-6">
      <motion.div
        className="grid gap-4 overflow-hidden p-1"
        initial="closed"
        animate={open ? 'open' : 'closed'}
        variants={{
          open: {
            transition: {
              staggerChildren: 0.07,
              delayChildren: 0.2,
              staggerDirection: -1
            }
          },
          closed: {
            transition: { staggerChildren: 0.05 }
          }
        }}
      >
        {_template.pages}
        <div>
          <button
            className="animate-gradient flex h-9 items-center justify-center rounded border border-gray-700 px-2 text-xl font-bold uppercase tracking-wider text-gray-900"
            type="button"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </motion.div>
    </div>
  )
}
