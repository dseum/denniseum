import Link from 'next/link'
import { DateTime } from 'luxon'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse/lib'
import rehypeStringify from 'rehype-stringify/lib'
import { BookOpenIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'
import { useSpring, animated } from '@react-spring/web'

const PostItem = props => {
  const [hover, setHover] = useState(false)
  const [styleIcon, styleIconApi] = useSpring(() => ({
    opacity: 0,
  }))
  useEffect(() => {
    if (hover) {
      styleIconApi.start({ opacity: 1 })
    } else {
      styleIconApi.start({ opacity: 0 })
    }
  }, [hover, styleIconApi])
  const _template = {
    id: props.data.id,
    title: props.data.title,
    date: DateTime.fromISO(props.data.date).toFormat('DD'),
    preview: unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .use(rehypeStringify)
      .processSync(props.data.rawContent)
      .toString(),
  }
  return (
    <li>
      <Link
        className="border border-gray-100 shadow-md p-3 rounded-md text-gray-500 flex justify-between hover:bg-gray-100 transition-colors duration-300"
        href={`/journal/${_template.id}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="max-w-md">
          <div className="flex items-center gap-2 text-base sm:text-lg font-bold">
            <span>{_template.date}</span>
            <span>&#183;</span>
            <span>{_template.title}</span>
          </div>
          <p className="text-gray-400 text-base sm:text-lg shave-3">
            {_template.preview}
          </p>
        </div>
        <div className="hidden lg:flex items-center justify-center w-24">
          <animated.div style={styleIcon}>
            <BookOpenIcon className="w-8 h-8 animate-little-bounce duration-75" />
          </animated.div>
        </div>
      </Link>
    </li>
  )
}

export default PostItem
