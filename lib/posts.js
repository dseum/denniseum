import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeShiki from 'rehype-shiki'
import rehypeStringify from 'rehype-stringify'

const postsDirectory = path.join(process.cwd(), 'posts')

const getSortedPosts = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const rawContent = matterResult.content
    return {
      id,
      rawContent,
      ...matterResult.data
    }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }))
}

const getPost = async id => {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeShiki)
    .use(rehypeStringify, {
      quoteSmart: true,
      closeSelfClosing: true,
      omitOptionalTags: true,
      entities: { useShortestReferences: true }
    })
  const rawContent = (await processor.process(matterResult.content)).value
  return {
    id,
    rawContent,
    ...matterResult.data
  }
}

export { getSortedPosts, getAllPostIds, getPost }
