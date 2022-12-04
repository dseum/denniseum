import ModalItem from '@/components/items/ModalItem'
import Layout from '@/components/Layout'
import List from '@/components/List'
import { projects } from '@/lib/data'
import { config, useTransition, animated } from '@react-spring/web'

export default function Projects() {
  const transitions = useTransition(projects, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    trail: 40,
  })
  const _template = {
    projects: transitions((style, project) => (
      <animated.div style={style}>
        <ModalItem href={project.href}>
          <ModalItem.Title>{project.name}</ModalItem.Title>
          <ModalItem.Preview>{project.description}</ModalItem.Preview>
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
          These are some of my creations that vary from apps, utilities, etc.
        </p>
        <div className="mt-4 md:mt-6">
          <List>
            <div className="grid lg:grid-cols-2 gap-6">
              {_template.projects}
            </div>
          </List>
        </div>
      </Layout.Content>
    </Layout>
  )
}