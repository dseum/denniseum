import ContactForm from '@/components/ContactForm'
import InlineLink from '@/components/InlineLink'
import Layout from '@/components/Layout'

export default function Contact() {
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
          <ContactForm />
        </div>
      </Layout.Content>
    </Layout>
  )
}
