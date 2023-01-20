import { classNames } from 'impulse-utils'

export default function List(props) {
  return (
    <ol className={classNames('mt-1 space-y-2 md:mt-3', props.className)}>
      {props.children}
    </ol>
  )
}
