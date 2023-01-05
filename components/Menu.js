import Link from 'next/link'
import {
  CubeIcon,
  MusicalNoteIcon,
  BookmarkSquareIcon,
  AtSymbolIcon
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { classNames, hashKey } from 'impulse-utils'
import { animated, useTrail } from '@react-spring/web'
import { useEffect, useState } from 'react'
import { throttle } from 'lodash'

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
  const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(true)
  const [currentY, setCurrentY] = useState(0)
  const [pagesTrails, api] = useTrail(
    pages.length,
    {
      opacity: 0,
      x: -130
    },
    []
  )
  useEffect(() => {
    setOpen(false)
  }, [pathname])
  useEffect(() => {
    console.log(count)
    if (open) {
      setCount(0)
      setVisible(true)
      api.start({
        opacity: 1,
        x: 0
      })
    } else {
      api.start({
        opacity: 0,
        x: -130,
        onRest() {
          setCount(count + 1)
        }
      })
    }
  }, [open, api, count])
  useEffect(() => {
    if (count === pages.length - 3) {
      setVisible(false)
    }
  }, [count])
  useEffect(() => {
    const updateOpen = throttle(() => {
      const { scrollY } = window
      if (currentY < scrollY) {
        setOpen(false)
      }
      setCurrentY(scrollY)
    }, 150)
    document.addEventListener('scroll', updateOpen)
    return () => document.removeEventListener('scroll', updateOpen)
  }, [currentY])
  const _template = {
    pages: visible
      ? pagesTrails.map((style, index) => {
          const page = pages[index]
          return (
            <animated.div key={hashKey(page.href)} style={style} className="flex">
              <Link
                className={classNames(
                  'flex-shrink text-xl uppercase font-bold tracking-wider flex items-center justify-start h-9 px-2 border border-gray-700 bg-[#f4f0e8] hover:bg-[#e7dfce] transition-colors duration-200 rounded',
                  pathname === page.href ? 'text-gray-900' : 'text-gray-500'
                )}
                href={page.href}
              >
                {page.name}
              </Link>
            </animated.div>
          )
        })
      : []
  }
  return (
    <div className="fixed bottom-3 left-3 lg:bottom-6 lg:left-6 z-10">
      <div className="p-1 grid space-y-1 gap-3 overflow-hidden">
        {_template.pages}
        <div>
          <button
            className="text-gray-900 text-xl uppercase font-bold tracking-wider flex items-center justify-center h-9 px-2 border border-gray-700 animate-gradient rounded"
            type="button"
            onClick={() => setOpen(!open)}
          >
            Menu
          </button>
        </div>
      </div>
    </div>
  )
}
