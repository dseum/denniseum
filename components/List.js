import { classNames } from 'impulse-utils'

export default function List(props) {
  return (
    <ol className={classNames('mt-1 md:mt-3 space-y-2', props.className)}>
      {props.children}
    </ol>
  )
}
