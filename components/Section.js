import { subComponent } from 'impulse-utils'

export default function Section(props) {
  const _template = {
    title: subComponent.select(props.children, 'Title'),
    content: subComponent.select(props.children, 'Content')
  }
  return (
    <div className="p-dynamic flex snap-start items-center justify-center">
      <div className="space-y-8 leading-loose sm:w-2/3 lg:w-1/2">
        <h1 className="text-4xl font-bold !leading-tight underline decoration-indigo-400 decoration-wavy sm:text-5xl lg:mr-8">
          {_template.title}
        </h1>
        <div className="space-y-8">{_template.content}</div>
      </div>
    </div>
  )
}

Section.Title = subComponent.create('Title')
Section.Content = subComponent.create('Content')
