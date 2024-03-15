import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

const Mark = forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function Mark({ children, className, ...restProps }, ref) {
    return (
      <mark
        className={cn('bg-indigo-100 px-[0.1rem]', className)}
        ref={ref}
        {...restProps}
      >
        {children}
      </mark>
    )
  },
)

export default Mark
