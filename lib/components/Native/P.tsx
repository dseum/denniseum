import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const P = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(function P({ children, className, ...restProps }, ref) {
  return (
    <p className={cn('leading-relaxed', className)} ref={ref} {...restProps}>
      {children}
    </p>
  )
})

export default P
