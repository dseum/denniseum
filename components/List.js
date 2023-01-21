import { classNames } from 'impulse-utils'
import { forwardRef } from 'react'

function List(props, ref) {
  return (
    <ol className={classNames('mt-1 md:mt-3', props.className)} ref={ref}>
      {props.children}
    </ol>
  )
}

export default forwardRef(List)
