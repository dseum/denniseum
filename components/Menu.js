import Link from 'next/link'
import {
  HomeIcon,
  CubeIcon,
  MusicalNoteIcon,
  BookmarkSquareIcon,
  AtSymbolIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'
import { classNames, hashKey } from 'impulse-utils'
import { useSpring, animated } from '@react-spring/web'
import { useContext, useEffect, useState } from 'react'
import { FirstLoadContext } from '@/lib/contexts'

const pages = [
  {
    name: 'Projects',
    href: '/projects',
    icon: CubeIcon,
  },
  {
    name: 'Cello',
    href: '/cello',
    icon: MusicalNoteIcon,
  },
  {
    name: 'Journal',
    href: '/journal',
    icon: BookmarkSquareIcon,
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: AtSymbolIcon,
  },
]

export default function Menu() {
  const firstLoad = useContext(FirstLoadContext)
  const { pathname } = useRouter()
  const [currentY, setCurrentY] = useState(0)
  const [open, setOpen] = useState(firstLoad)
  const [styleVisible, styleVisibleApi] = useSpring(() => ({ height: 58 }))
  useEffect(() => {
    firstLoad.set(true)
  }, [firstLoad])
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(firstLoad.state)
    }, 2000)
    return () => clearTimeout(timer)
  }, [pathname, firstLoad.state])
  useEffect(() => {
    const updateVisible = () => {
      const { scrollY } = window
      setOpen(currentY > scrollY)
      setCurrentY(scrollY)
    }
    document.addEventListener('scroll', updateVisible)
    return () => document.removeEventListener('scroll', updateVisible)
  }, [currentY])
  useEffect(() => {
    if (open) {
      styleVisibleApi.start({ height: 331 })
    } else {
      styleVisibleApi.stop()
      styleVisibleApi.start({ height: 58 })
    }
  }, [open, styleVisibleApi])
  const _template = {
    pages: pages.map((page, index) => (
      <Orb
        name={page.name}
        href={page.href}
        open={open}
        offset={index + 1}
        key={hashKey(page.href)}
      >
        {<page.icon className="w-6 h-6" />}
      </Orb>
    )),
  }
  return (
    <div className="fixed bottom-3 left-3 z-10 group flex gap-3">
      <div className="relative">
        <animated.div
          className="static flex-col-reverse p-1 space-y-1 border border-gray-400 rounded-full bg-white overflow-hidden"
          style={styleVisible}
        >
          <Orb name="Home" href="/" open={open} offset={0}>
            <HomeIcon className="w-6 h-6" />
          </Orb>
          {_template.pages}
          <div className="border-t border-gray-400 !my-2 mx-2"></div>
          <ToggleOrb open={open} setOpen={setOpen} />
        </animated.div>
      </div>
    </div>
  )
}

function Orb(props) {
  const { pathname } = useRouter()
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  const [styleNames, styleNamesApi] = useSpring(() => ({
    opacity: 0,
  }))
  useEffect(() => {
    if (hover) {
      styleNamesApi.start({ opacity: 1 })
    } else {
      styleNamesApi.start({ opacity: 0 })
    }
  }, [hover, styleNamesApi])
  useEffect(() => {
    if (click) {
      setHover(true)
      const timer = setTimeout(() => setClick(false), 750)
      return () => clearTimeout(timer)
    } else {
      setHover(false)
    }
  }, [click])
  return (
    <div>
      <Link
        className={classNames(
          'rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300',
          pathname === props.href && props.open && 'bg-gray-200'
        )}
        href={props.href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setClick(true)}
      >
        {props.children}
      </Link>
      <animated.div
        className="absolute left-0 top-0 h-12 ml-[4.25rem] flex items-center"
        style={{
          marginTop: 4 + 52 * props.offset,
          ...styleNames,
        }}
      >
        <div className="bg-indigo-200 py-1 px-2 rounded-md">{props.name}</div>
      </animated.div>
    </div>
  )
}

function ToggleOrb(props) {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)
  const [styleNames, styleNamesApi] = useSpring(() => ({
    opacity: 0,
  }))
  const [styleRotate, styleRotateApi] = useSpring(() => ({
    transform: 'rotate(0deg)',
    borderColor: '#d1d5db',
  }))
  useEffect(() => {
    if (hover) {
      styleNamesApi.start({ opacity: 1 })
    } else {
      styleNamesApi.start({ opacity: 0 })
    }
  }, [hover, styleNamesApi])
  useEffect(() => {
    if (props.open) {
      styleRotateApi.start({
        transform: 'rotate(0deg)',
        borderColor: '#d1d5db',
      })
    } else {
      styleRotateApi.start({
        transform: 'rotate(180deg)',
        borderColor: '#ffffff',
      })
    }
  }, [props.open, styleRotateApi])
  useEffect(() => {
    if (click) {
      setHover(true)
      const timer = setTimeout(() => setClick(false), 750)
      return () => clearTimeout(timer)
    } else {
      setHover(false)
    }
  }, [click])
  return (
    <div className="absolute bottom-[1px]">
      <div className="relative flex">
        <div className="rounded-full h-14 bg-white flex items-center">
          <animated.button
            className="rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 border bg-white"
            style={styleRotate}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() => {
              props.setOpen(!props.open)
              setClick(true)
            }}
          >
            <ArrowDownIcon className="w-6 h-6" />
          </animated.button>
        </div>
        <animated.div
          className="absolute left-0 top-1 h-12 ml-16 flex items-center"
          style={styleNames}
        >
          <div className="bg-indigo-200 py-1 px-2 rounded-md">
            {props.open ? 'Close' : 'Open'}
          </div>
        </animated.div>
      </div>
    </div>
  )
}
