import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import Head from 'next/head'
import Section from '@/components/Section'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

export default function Home() {
  const selfRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [visible, setVisible] = useState(true)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', latest => {
    const margin = (screen.width + 80) / 21
    setVisible(latest < margin)
  })
  useEffect(() => {
    setHeight(window.innerHeight)
    const updateHeight = () => {
      setHeight(window.innerHeight)
    }
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [])
  const handleScrollDown = () => {
    const currSelfRef = selfRef.current
    window.scroll({
      top: currSelfRef.scrollTop + currSelfRef.scrollHeight,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://denniseum.com/"></link>
      </Head>
      <div
        className={classNames(
          'relative flex items-center justify-center',
          height === 0 && '!h-screen'
        )}
        style={{ height }}
        ref={selfRef}
      >
        <motion.div
          className="relative h-32 w-52"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            className="object-contain"
            src="/images/signature.jpg"
            alt="Signature"
            fill
            priority
          />
        </motion.div>
        <motion.button
          className="absolute bottom-8"
          type="button"
          onClick={handleScrollDown}
          animate={visible ? 'visible' : 'invisible'}
          variants={{
            visible: { opacity: 1, duration: 1 },
            invisible: { opacity: 0, duration: 1 }
          }}
        >
          <ChevronDownIcon className="h-8 w-8 animate-bounce" />
        </motion.button>
      </div>
      <Section>
        <Section.Title>Hello!</Section.Title>
        <Section.Content>
          <p>
            My name is <span className="font-bold">Dennis Eum</span>, and I am a
            software engineer and mathematician studying at Harvard. Based in
            Minnesota, I love experimenting with creations and am also an avid
            cellist and debater.
          </p>
          <p>
            I believe <mark>C++</mark>, <mark>Rust</mark>, <mark>Python</mark>,
            and <mark>JS</mark> are the four pillars of interactive software.
            While I am still in the early phase of discovering all of what is
            out there, there is something special about those languages that
            establish a very clear aesthetic of programming.
          </p>
        </Section.Content>
      </Section>
    </>
  )
}
