import ContactForm from '@/components/ContactForm'
import InlineLink from '@/components/InlineLink'
import Layout from '@/components/Layout'
import { FirebaseConfigContext } from '@/lib/contexts'

export default function Contact({ firebaseConfig }) {
  return (
    <Layout>
      <Layout.Head>
        <meta name="robots" content="none"></meta>
        <link rel="canonical" href="https://denniseum.com/contact"></link>
      </Layout.Head>
      <Layout.Title>Contact</Layout.Title>
      <Layout.Content>
        <p className="text-xl sm:text-2xl">
          I&apos;m generally active on{' '}
          <InlineLink href="https://www.linkedin.com/in/denniseum/" external>
            LinkedIn
          </InlineLink>{' '}
          and{' '}
          <InlineLink href="https://github.com/dseum22/" external>
            GitHub
          </InlineLink>
          . If you want to contact me directly, please use the following form.
        </p>
        <div className="mt-6">
          <FirebaseConfigContext.Provider value={firebaseConfig}>
            <ContactForm />
          </FirebaseConfigContext.Provider>
        </div>
      </Layout.Content>
    </Layout>
  )
}

export async function getStaticProps() {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }
  return {
    props: {
      firebaseConfig
    }
  }
}
