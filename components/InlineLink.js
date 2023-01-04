import { useSpring } from '@react-spring/web'
import { classNames } from 'impulse-utils'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function InlineLink(props) {
  const [internal, setInternal] = useState(false)
  const _styles = {
    link: useSpring()
  }
  useEffect(() => {
    const tempEl = document.createElement('a')
    tempEl.href = props.href
    setInternal(tempEl.host === window.location.host)
  }, [props.href])
  const _classNames = {
    link: 'border-b border-gray-800 text-gray-800 hover:bg-indigo-100 transition-colors duration-200'
  }
  if (internal) {
    return (
      <Link
        className={classNames(_classNames.link, props.className)}
        href={props.href}
        style={_styles.link}
      >
        {props.children}
      </Link>
    )
  }
  return (
    <a
      className={classNames(_classNames.link, props.className)}
      href={props.href}
      target="_blank"
      rel="noreferrer"
    >
      {props.children}
    </a>
  )
}
