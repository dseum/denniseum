'use client'

import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

const A = forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(function A({ children, className, href, ...restProps }, ref) {
  const sharedClassNames =
    'border-b border-gray-800 text-gray-800 hover:bg-indigo-100 transition-colors duration-200'
  // Unsafe internal href check
  return href && href.startsWith('/') ? (
    <Link
      className={cn(sharedClassNames, className)}
      ref={ref}
      href={href as string}
      {...restProps}
    >
      {children}
    </Link>
  ) : (
    <a
      className={cn(sharedClassNames, className)}
      href={href}
      ref={ref}
      target="_blank"
      rel="noreferrer"
      {...restProps}
    >
      {children}
    </a>
  )
})

export default A
