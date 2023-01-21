import Layout from '@/components/Layout'
import { NewspaperIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import Card from '@/components/Card'
import DefaultItem from '@/components/items/DefaultItem'
import List from '@/components/List'
import { cello } from '@/lib/data'
import { motion } from 'framer-motion'
import { hashKey } from 'impulse-utils'

export default function Cello() {
  const MotionList = motion(List)
  const _template = {
    awards: cello.awards.map(award => (
      <motion.div
        key={hashKey(award.name)}
        variants={{
          shown: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <DefaultItem href={award.href}>{award.name}</DefaultItem>
      </motion.div>
    )),
    recordings: cello.recordings.map(recording => (
      <motion.div
        key={hashKey(recording.name)}
        variants={{
          shown: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
      >
        <DefaultItem href={recording.href}>{recording.name}</DefaultItem>
      </motion.div>
    ))
  }
  return (
    <Layout>
      <Layout.Head>
        <meta name="robots" content="none"></meta>
        <link rel="canonical" href="https://denniseum.com/cello"></link>
      </Layout.Head>
      <Layout.Title>Cello</Layout.Title>
      <Layout.Content>
        <p className="text-xl sm:text-2xl">
          I have been playing solo cello for {new Date().getFullYear() - 2012}{' '}
          years and orchestral music for {2022 - 2014} years. These are some of
          my competitions and performances.
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:gap-8">
          <Card icon={NewspaperIcon}>
            <Card.Title>Awards</Card.Title>
            <Card.Content>
              <MotionList
                className="space-y-2"
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
                {_template.awards}
              </MotionList>
            </Card.Content>
          </Card>
          <Card icon={VideoCameraIcon}>
            <Card.Title>Recordings</Card.Title>
            <Card.Content>
              <MotionList
                className="space-y-2"
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
                {_template.recordings}
              </MotionList>
            </Card.Content>
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  )
}
