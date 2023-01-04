import Head from 'next/head'
import { subComponent } from 'impulse-utils'

export default function Layout(props) {
  const _template = {
    head: subComponent.select(props.children, 'Head'),
    title: subComponent.select(props.children, 'Title'),
    content: subComponent.select(props.children, 'Content')
  }
  return (
    <>
      <Head>{_template.head}</Head>
      <div className="px-dynamic flex justify-center">
        <div className="sm:w-2/3 mt-8">
          <h1 className="text-4xl sm:text-5xl font-bold !leading-tight lg:mr-8 underline decoration-wavy decoration-indigo-400">
            {_template.title}
          </h1>
          <div className="mt-6">{_template.content}</div>
        </div>
      </div>
    </>
  )
}

Layout.Head = subComponent.create('Head')
Layout.Title = subComponent.create('Title')
Layout.Content = subComponent.create('Content')
