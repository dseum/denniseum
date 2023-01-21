import { getSortedPosts } from '@/lib/posts'
import Layout from '@/components/Layout'
import List from '@/components/List'
import PostItem from '@/components/items/PostItem'
import { hashKey } from 'impulse-utils'
import { debounce } from 'lodash'
import shave from 'shave'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Journal(props) {
  useEffect(() => {
    const shaver = debounce(() => shave('.shave-3', 28 * 3), 10)
    shaver()
    window.addEventListener('resize', shaver)
    return () => window.removeEventListener('resize', shaver)
  }, [])
  const MotionList = motion(List)
  const _template = {
    warning: props.posts.length === 0 && 'No posts published yet.',
    posts: props.posts.map(postData => (
      <motion.div
        key={hashKey(JSON.stringify(postData.title))}
        variants={{
          shown: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        }}
      >
        <PostItem data={postData} />
      </motion.div>
    ))
  }
  return (
    <Layout>
      <Layout.Head>
        <meta name="robots" content="none"></meta>
        <link rel="canonical" href="https://denniseum.com/journal"></link>
      </Layout.Head>
      <Layout.Title>Journal</Layout.Title>
      <Layout.Content>
        <p className="text-xl sm:text-2xl">
          This is a rough draft collection of my thoughts and ideas.
        </p>
        <div className="mt-6">
          <span className="text-xl sm:text-2xl">{_template.warning}</span>
          <MotionList
            className="grid gap-4 sm:gap-6"
            initial="hidden"
            animate="shown"
            variants={{
              shown: {
                transition: {
                  staggerChildren: 0.07
                }
              }
            }}
          >
            {_template.posts}
          </MotionList>
        </div>
      </Layout.Content>
    </Layout>
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
