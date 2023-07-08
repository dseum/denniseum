import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { BookOpenIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { classNames } from 'impulse-utils'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import Head from 'next/head'
import Section from '@/components/Section'
import InlineLink from '@/components/InlineLink'
import Link from 'next/link'
import { getSortedPosts } from '@/lib/posts'
import { DateTime } from 'luxon'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeStringify from 'rehype-stringify'
import { hashKey } from 'impulse-utils'
import { debounce } from 'lodash'
import shave from 'shave'

export default function Home(props) {
  const selfRef = useRef(null)
  const [height, setHeight] = useState(0)
  const [visible, setVisible] = useState(true)
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, 'change', latest => {
    const margin = (screen.width + 80) / 21
    setVisible(latest < margin)
  })
  useEffect(() => {
    const handleResize = debounce(() => {
      setHeight(window.innerHeight)
      shave('.shave-3', 28 * 3)
    }, 10)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  const _template = {
    warning: props.posts.length === 0 ? 'No posts published yet.' : null,
    posts: props.posts.map(postData => {
      const _innerTemplate = {
        id: postData.id,
        title: postData.title,
        date: DateTime.fromISO(postData.date).toFormat('DD'),
        preview: unified()
          .use(rehypeParse, {
            fragment: true
          })
          .use(rehypeStringify)
          .processSync(postData.rawContent)
          .toString()
      }
      return (
        <li key={hashKey(JSON.stringify(postData.title))}>
          <Link
            className="group flex justify-between rounded-md border border-gray-100 py-3 px-5 shadow-md transition-colors duration-300 hover:bg-gray-100"
            href={`/notes/${_innerTemplate.id}`}
          >
            <div className="max-w-md">
              <div className="flex items-center gap-2 text-base font-bold text-gray-600 sm:text-lg">
                <span>{_innerTemplate.date}</span>
                <span>&#183;</span>
                <span>{_innerTemplate.title}</span>
              </div>
              <p className="shave-3 h-[4.5rem] overflow-hidden text-base text-gray-500 sm:h-[5.25rem] sm:text-lg">
                {_innerTemplate.preview}
              </p>
            </div>
            <div className="hidden w-24 items-center justify-center lg:flex">
              <BookOpenIcon className="group-hover:animate-little-bounce h-8 w-8 duration-75" />
            </div>
          </Link>
        </li>
      )
    })
  }
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
            visible: {
              opacity: 1,
              duration: 1
            },
            invisible: {
              opacity: 0,
              duration: 1
            }
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
            software engineer and mathematician studying at Harvard. Originally
            from Minnesota, I currently work at{' '}
            <InlineLink href="https://theceso.com">CESO</InlineLink> and lead
            tech at{' '}
            <InlineLink href="https://github.com/hackharvard">
              HackHarvard
            </InlineLink>
            .
          </p>
          <p>
            I mainly enjoy <mark>JS</mark>, <mark>C++</mark>, <mark>Rust</mark>,
            and <mark>Python</mark>, but I am also well-versed in various other
            languages. Check out{' '}
            <InlineLink href="https://github.com/hackharvard/portal">
              hackharvard/portal
            </InlineLink>{' '}
            and{' '}
            <InlineLink href="https://github.com/dseum22/tfa-calendar">
              tfa-calendar
            </InlineLink>{' '}
            for production open source projects.
          </p>
          <p>
            If you want to contact me, I am generally active on{' '}
            <InlineLink href="https://www.linkedin.com/in/denniseum/">
              LinkedIn
            </InlineLink>{' '}
            and{' '}
            <InlineLink href="https://github.com/dseum22/">GitHub</InlineLink>.
            Otherwise, please email{' '}
            <InlineLink href="mailto:me@denniseum.com">
              me@denniseum.com
            </InlineLink>
            .
          </p>
        </Section.Content>
      </Section>
      <Section>
        <Section.Title>Some Notes</Section.Title>
        <Section.Content>
          <span className="text-xl sm:text-2xl">{_template.warning}</span>
          <ol className="grid gap-4 sm:gap-6">{_template.posts}</ol>
        </Section.Content>
      </Section>
    </>
  )
}

export function getStaticProps() {
  const posts = getSortedPosts()
  return {
    props: {
      posts
    }
  }
}
