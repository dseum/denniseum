import { subComponent } from 'impulse-utils'

export default function Section(props) {
  const _template = {
    title: subComponent.select(props.children, 'Title'),
    content: subComponent.select(props.children, 'Content')
  }
  return (
    <div className="flex items-center justify-center snap-start p-dynamic">
      <div className="sm:w-2/3 lg:w-1/2 leading-loose space-y-8">
        <h1 className="text-4xl sm:text-5xl font-bold !leading-tight lg:mr-8 underline decoration-wavy decoration-indigo-400">
          {_template.title}
        </h1>
        <div className="space-y-8">{_template.content}</div>
      </div>
    </div>
  )
}

Section.Title = subComponent.create('Title')
Section.Content = subComponent.create('Content')
