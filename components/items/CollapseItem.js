import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { subComponent, classNames } from 'impulse-utils'

const CollapseItem = props => {
  const _template = {
    title: subComponent.select(props.children, 'Title'),
    content: subComponent.select(props.children, 'Content')
  }
  return (
    <Disclosure as="li">
      {({ open }) => (
        <>
          <Disclosure.Button className="transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100 py-1 px-3 rounded text-gray-500 w-full flex items-center justify-between text-lg sm:text-xl">
            <span>{_template.title}</span>
            <ChevronUpIcon
              className={classNames(open && 'transform rotate-180', 'w-5 h-5 text-gray-500')}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-3 mt-2 text-gray-400 text-base sm:text-lg">
            {_template.content}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

CollapseItem.Title = subComponent.create('Title')
CollapseItem.Content = subComponent.create('Content')

export default CollapseItem
