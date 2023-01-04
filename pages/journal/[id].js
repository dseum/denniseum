import Head from 'next/head'
import Image from 'next/image'
import { DateTime } from 'luxon'
import { getAllPostIds, getPost } from '@/lib/posts'
import Markdown from '@/components/Markdown'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import { createElement } from 'react'
import rehypeStringify from 'rehype-stringify/lib'
import signatureImage from '@/assets/images/signature.jpg'
import InlineLink from '@/components/InlineLink'

export default function Post(props) {
  const _template = {
    title: props.post.title,
    id: props.post.id,
    date: DateTime.fromISO(props.post.date).toFormat('DDD'),
    readTime: Math.round(
      unified()
        .use(rehypeParse, {
          fragment: true
        })
        .use(rehypeStringify)
        .processSync(props.post.rawContent)
        .toString()
        .split(' ').length / 250
    ),
    content: unified()
      .use(rehypeParse, {
        fragment: true
      })
      .use(rehypeReact, {
        createElement: createElement,
        components: {
          p: Markdown.P,
          pre: Markdown.Pre,
          div: Markdown.Div,
          code: Markdown.Code
        }
      })
      .processSync(props.post.rawContent).result
  }
  return (
    <>
      <Head>
        <title>{`Dennis Eum - ${_template.title}`}</title>
        <meta name="robots" content="none"></meta>
        <link rel="canonical" href={`https://denniseum.com/blog/${_template.id}`}></link>
      </Head>
      <div className="max-w-3xl mx-auto px-dynamic">
        <div className="text-xl sm:text-2xl text-gray-400 mt-6">
          <InlineLink href="/journal">Back to Journal</InlineLink>
        </div>
        <div className="my-1 mt-6 sm:mt-7">
          <h1 className="text-4xl sm:text-5xl font-bold">{_template.title}</h1>
        </div>
        <div className="text-xl sm:text-2xl text-gray-400 my-5 sm:my-6">
          <span>Posted on {_template.date}</span>
          <div className="hidden sm:inline-block">
            <span className="mx-2">&#183;</span>
            <span>{_template.readTime} min read</span>
          </div>
        </div>
        <div className="font-serif !leading-loose !tracking-wide">
          <Markdown>{_template.content}</Markdown>
        </div>
        <div className="flex items-center justify-center my-6 lg:my-10">
          <div className="w-44">
            <Image src={signatureImage} alt="" />
          </div>
        </div>
        <div className="text-xl sm:text-2xl text-gray-400 mt-4 lg:my-6">
          <InlineLink href="/journal">Back to Journal</InlineLink>
        </div>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.id)
  return {
    props: {
      post
    }
  }
}
