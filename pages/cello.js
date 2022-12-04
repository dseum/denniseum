import Layout from '@/components/Layout'
import { NewspaperIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import Card from '@/components/Card'
import DefaultItem from '@/components/items/DefaultItem'
import List from '@/components/List'
import { cello } from '@/lib/data'
import {
  useTransition,
  animated,
  config,
  useSpringRef,
  useChain,
} from '@react-spring/web'

export default function Cello() {
  const awardsTransitionRef = useSpringRef()
  const awardsTransitions = useTransition(cello.recordings, {
    ref: awardsTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    trail: 40,
  })
  const recordingsTransitionRef = useSpringRef()
  const recordingsTransitions = useTransition(cello.recordings, {
    ref: recordingsTransitionRef,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
    trail: 40,
  })
  useChain([awardsTransitionRef, recordingsTransitionRef], [0, 0.3])
  const _template = {
    awards: awardsTransitions((style, award) => (
      <animated.div style={style}>
        <DefaultItem href={award.href}>{award.name}</DefaultItem>
      </animated.div>
    )),
    recordings: recordingsTransitions((style, recording) => (
      <animated.div style={style}>
        <DefaultItem href={recording.href}>{recording.name}</DefaultItem>
      </animated.div>
    )),
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
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-4 md:mt-6">
          <Card icon={NewspaperIcon}>
            <Card.Title>Awards</Card.Title>
            <Card.Content>
              <List>{_template.awards}</List>
            </Card.Content>
          </Card>
          <Card icon={VideoCameraIcon}>
            <Card.Title>Recordings</Card.Title>
            <Card.Content>
              <List>{_template.recordings}</List>
            </Card.Content>
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  )
}
