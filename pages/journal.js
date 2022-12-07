import { getSortedPosts } from '@/lib/posts'
import Layout from '@/components/Layout'
import List from '@/components/List'
import PostItem from '@/components/items/PostItem'
import { useTransition, animated, config } from '@react-spring/web'
import { hashKey } from 'impulse-utils'
import { debounce } from 'lodash'
import shave from 'shave'
import { useEffect } from 'react'

export default function Journal(props) {
  const shaver = debounce(
    () => shave('.shave-3', 28 * 3, { classname: 'shave-3' }),
    10
  )
  useEffect(() => {
    shaver()
    window.addEventListener('resize', shaver)
    return () => window.removeEventListener('resize', shaver)
  }, [shaver])
  const transitions = useTransition(props.posts, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    trail: 40,
    keys: postData => hashKey(JSON.stringify(postData)),
  })
  const _template = {
    warning: props.posts.length === 0 && 'No posts published yet.',
    posts: transitions((style, postData) => (
      <animated.div style={style}>
        <PostItem data={postData} />
      </animated.div>
    )),
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
          <List>{_template.posts}</List>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export const getStaticProps = () => {
  const posts = getSortedPosts()
  return {
    props: {
      posts,
    },
  }
}
