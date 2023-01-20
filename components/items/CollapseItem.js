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
          <Disclosure.Button className="flex w-full items-center justify-between rounded py-1 px-3 text-lg text-gray-500 transition-colors duration-200 hover:cursor-pointer hover:bg-gray-100 sm:text-xl">
            <span>{_template.title}</span>
            <ChevronUpIcon
              className={classNames(
                open && 'rotate-180 transform',
                'h-5 w-5 text-gray-500'
              )}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 px-3 text-base text-gray-400 sm:text-lg">
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
