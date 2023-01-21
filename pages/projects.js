import ModalItem from '@/components/items/ModalItem'
import Layout from '@/components/Layout'
import List from '@/components/List'
import { projects } from '@/lib/data'
import { debounce } from 'lodash'
import { useEffect } from 'react'
import shave from 'shave'
import { motion } from 'framer-motion'

export default function Projects() {
  useEffect(() => {
    const shaver = debounce(() => shave('.shave-3', 28 * 3), 10)
    shaver()
    window.addEventListener('resize', shaver)
    return () => window.removeEventListener('resize', shaver)
  }, [])
  const MotionList = motion(List)
  const _template = {
    projects: projects.map(project => (
      <motion.div
        key={project.name}
        variants={{
          shown: {
            opacity: 1
          },
          hidden: {
            opacity: 0
          }
        }}
      >
        <ModalItem href={project.href}>
          <ModalItem.Title>{project.name}</ModalItem.Title>
          <ModalItem.Preview>{project.content}</ModalItem.Preview>
          <ModalItem.Stack>{project.stack.join(', ')}</ModalItem.Stack>
          <ModalItem.Content>{project.content}</ModalItem.Content>
        </ModalItem>
      </motion.div>
    ))
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
          <MotionList
            className="grid gap-4 sm:gap-6 lg:grid-cols-2"
            initial="hidden"
            animate="shown"
            variants={{
              shown: {
                transition: {
                  staggerChildren: 0.07
                }
              }
            }}
          >
            {_template.projects}
          </MotionList>
        </div>
      </Layout.Content>
    </Layout>
  )
}
