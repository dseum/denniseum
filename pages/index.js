import { useSpring, animated } from '@react-spring/web'
import signatureImage from '@/assets/images/signature.jpg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import Head from 'next/head'
import Section from '@/components/Section'

export default function Home() {
  const selfRef = useRef(null)
  const [height, setHeight] = useState(0)
  const styleSignature = useSpring({
    from: { opacity: 0, scale: 0.95 },
    to: { opacity: 1, scale: 1 },
    config: {
      duration: 1000
    }
  })
  const [styleVisible, styleVisibleApi] = useSpring(() => ({
    opacity: 1,
    config: {
      duration: 100
    }
  }))
  useEffect(() => {
    setHeight(window.innerHeight)
    const margin = (screen.width + 80) / 21
    const updateHeight = () => {
      setHeight(window.innerHeight)
    }
    const updateVisible = () => {
      const { scrollY } = window
      if (scrollY < margin) {
        styleVisibleApi.start({
          opacity: 1,
          config: {
            duration: 100
          }
        })
      } else {
        styleVisibleApi.stop()
        styleVisibleApi.start({
          opacity: 0,
          config: {
            duration: 100
          }
        })
      }
    }
    window.addEventListener('resize', updateHeight)
    document.addEventListener('scroll', updateVisible)
    return () => {
      window.removeEventListener('resize', updateHeight)
      document.removeEventListener('scroll', updateVisible)
    }
  }, [styleVisibleApi])
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
        <meta
          name="description"
          content="Hello! My name is Dennis Eum, and I am a software engineer
            and mathematician studying at Harvard. Based in Minnesota, I love experimenting with
            creations and am also an avid cellist and debater."
        ></meta>
      </Head>
      <div
        className={classNames(
          'flex items-center justify-center relative snap-start',
          height === 0 && '!h-screen'
        )}
        style={{ height }}
        ref={selfRef}
      >
        <animated.div className="w-52" style={styleSignature}>
          <Image src={signatureImage} alt="Signature" priority />
        </animated.div>
        <animated.button
          className="absolute bottom-8"
          style={styleVisible}
          type="button"
          onClick={handleScrollDown}
        >
          <ChevronDownIcon className="w-8 h-8 animate-bounce" />
        </animated.button>
      </div>
      <Section>
        <Section.Title>Hello!</Section.Title>
        <Section.Content>
          <p>
            My name is <span className="font-bold">Dennis Eum</span>, and I am a software engineer
            and mathematician studying at Harvard. Based in Minnesota, I love experimenting with
            creations and am also an avid cellist and debater.
          </p>
          <p>
            I believe <mark>C++</mark>, <mark>Rust</mark>, <mark>Python</mark>, and <mark>JS</mark>{' '}
            are the four pillars of interactive software. While I am still in the early phase of
            discovering all of what is out there, there is something special about those languages
            in utility and design.
          </p>
          <p>
            Together, they establish a very clear aesthetic of computer science that should be the
            goal of every program.
          </p>
        </Section.Content>
      </Section>
    </>
  )
}
