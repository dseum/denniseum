import ModalItem from '@/components/items/ModalItem'
import Layout from '@/components/Layout'
import List from '@/components/List'
import { projects } from '@/lib/data'
import { config, useTransition, animated } from '@react-spring/web'
import { debounce } from 'lodash'
import { useEffect } from 'react'
import shave from 'shave'

export default function Projects() {
  const shaver = debounce(
    () => shave('.shave-3', 28 * 3, { classname: 'shave-3' }),
    10
  )
  useEffect(() => {
    window.addEventListener('resize', () => shaver)
    return window.removeEventListener('resize', shaver)
  }, [shaver])
  const transitions = useTransition(projects, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    trail: 40,
    delay: 10,
    onStart: () => shaver(),
  })
  const _template = {
    projects: transitions((style, project) => (
      <animated.div style={style}>
        <ModalItem href={project.href}>
          <ModalItem.Title>{project.name}</ModalItem.Title>
          <ModalItem.Preview>
            {`${project.description} ${project.content}`}
          </ModalItem.Preview>
          <ModalItem.Stack>{project.stack.join(', ')}</ModalItem.Stack>
          <ModalItem.Content>{project.content}</ModalItem.Content>
        </ModalItem>
      </animated.div>
    )),
  }
  return (
    <Layout>
      <Layout.Head>
        <meta name="robots" content="none"></meta>
        <link rel="canonical" href="https://denniseum.com/projects"></link>
      </Layout.Head>
      <Layout.Title>Projects</Layout.Title>
      <Layout.Content>
        <p className="text-xl sm:text-2xl">
          These are some of my creations, which vary from apps, utilities, etc.
        </p>
        <div className="mt-6">
          <List>
            <div className="grid lg:grid-cols-2 gap-4 sm:gap-6">
              {_template.projects}
            </div>
          </List>
        </div>
      </Layout.Content>
    </Layout>
  )
}
