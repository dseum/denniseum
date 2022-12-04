import {
  ArrowTopRightOnSquareIcon,
  EyeSlashIcon,
} from '@heroicons/react/24/outline'

const DefaultItem = props => {
  if (props.href) {
    if (props.href === '') {
      return (
        <li>
          <div className="flex flex-nowrap items-center justify-between transition-colors duration-200 hover:bg-gray-100 py-1 px-3 rounded text-gray-500 text-lg sm:text-xl gap-2">
            {props.children}
            <EyeSlashIcon className="h-6 w-6 shrink-0" />
          </div>
        </li>
      )
    } else {
      return (
        <li>
          <a href={props.href} target="_blank" rel="noreferrer">
            <div className="flex flex-nowrap items-center justify-between transition-colors duration-200 hover:bg-gray-100 py-1 px-3 rounded text-gray-500 text-lg sm:text-xl gap-2">
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
        <div className="transition-colors duration-200 hover:bg-gray-100 py-1 px-3 rounded text-gray-500 text-lg sm:text-xl">
          {props.children}
        </div>
      </li>
    )
  }
}

export default DefaultItem
