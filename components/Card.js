import { createElement } from 'react'
import { subComponent } from 'impulse-utils'

export default function Card(props) {
  const _template = {
    icon: createElement(props.icon, {
      className: 'h-7 w-7',
    }),
    title: subComponent.select(props.children, 'Title'),
    content: subComponent.select(props.children, 'Content'),
  }
  return (
    <div className="border border-gray-100 shadow-md rounded-md px-5 py-3 md:py-4">
      <div className="flex gap-1 md:gap-2">
        {_template.icon}
        <h2 className="text-lg sm:text-xl font-bold">{_template.title}</h2>
      </div>
      {_template.content}
    </div>
  )
}

Card.Title = subComponent.create('Title')
Card.Content = subComponent.create('Content')
