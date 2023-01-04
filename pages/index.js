import { useSpring, animated, update } from '@react-spring/web'
import signatureImage from '@/assets/images/signature.jpg'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import InlineLink from '@/components/InlineLink'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="robots" content="index, follow"></meta>
        <link rel="canonical" href="https://denniseum.com/"></link>
      </Head>
      <BannerSection />
      <BioSection />
    </>
  )
}

function BannerSection() {
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
  )
}

function BioSection() {
  return (
    <div className="flex items-center justify-center snap-start p-dynamic">
      <div className="sm:w-2/3 lg:w-1/2 leading-loose space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold !leading-tight lg:mr-8 underline decoration-wavy decoration-indigo-400">
          Hello!
        </h1>
        <p>
          My name is <span className="font-bold">Dennis Eum</span>, and I am a software engineer and
          mathematician studying at Harvard. Based in Minnesota, I love experimenting with creations
          and am also an avid cellist and debater.
        </p>
        <p>
          I believe <mark>C++</mark>, <mark>Rust</mark>, <mark>Python</mark>, and <mark>JS</mark>{' '}
          are the four pillars of interactive software. With these languages, coding is a
          combination of aesthetics and utility, and therefore, designing programs with every aspect
          in mind is crucial.
        </p>
        <p>
          You can request my full resume and send me messages{' '}
          <InlineLink href="/contact">here</InlineLink>.
        </p>
      </div>
    </div>
  )
}
