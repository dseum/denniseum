import Link from 'next/link'
import { DateTime } from 'luxon'
import { unified } from 'unified'
import rehypeParse from 'rehype-parse/lib'
import rehypeStringify from 'rehype-stringify/lib'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const PostItem = props => {
  const _template = {
    id: props.data.id,
    title: props.data.title,
    date: DateTime.fromISO(props.data.date).toFormat('DD'),
    preview: unified()
      .use(rehypeParse, {
        fragment: true
      })
      .use(rehypeStringify)
      .processSync(props.data.rawContent)
      .toString()
  }
  return (
    <li>
      <Link
        className="group flex justify-between rounded-md border border-gray-100 py-3 px-5 shadow-md transition-colors duration-300 hover:bg-gray-100"
        href={`/journal/${_template.id}`}
      >
        <div className="max-w-md">
          <div className="flex items-center gap-2 text-base font-bold text-gray-600 sm:text-lg">
            <span>{_template.date}</span>
            <span>&#183;</span>
            <span>{_template.title}</span>
          </div>
          <p className="shave-3 h-[4.5rem] overflow-hidden text-base text-gray-500 sm:h-[5.25rem] sm:text-lg">
            {_template.preview}
          </p>
        </div>
        <div className="hidden w-24 items-center justify-center lg:flex">
          <BookOpenIcon className="group-hover:animate-little-bounce h-8 w-8 duration-75" />
        </div>
      </Link>
    </li>
  )
}

export default PostItem
