import {
  ArrowTopRightOnSquareIcon,
  EyeSlashIcon
} from '@heroicons/react/24/outline'

const DefaultItem = props => {
  if (props.href) {
    if (props.href === '') {
      return (
        <li>
          <div className="flex flex-nowrap items-center justify-between gap-2 rounded py-1 px-3 text-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-xl">
            {props.children}
            <EyeSlashIcon className="h-6 w-6 shrink-0" />
          </div>
        </li>
      )
    } else {
      return (
        <li>
          <a href={props.href} target="_blank" rel="noreferrer">
            <div className="flex flex-nowrap items-center justify-between gap-2 rounded py-1 px-3 text-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-xl">
              {props.children}
              <ArrowTopRightOnSquareIcon className="h-6 w-6 shrink-0" />
            </div>
          </a>
        </li>
      )
    }
  } else {
    return (
      <li>
        <div className="rounded py-1 px-3 text-lg text-gray-600 transition-colors duration-200 hover:bg-gray-100 sm:text-xl">
          {props.children}
        </div>
      </li>
    )
  }
}

export default DefaultItem
