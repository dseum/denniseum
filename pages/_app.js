import '@/styles/globals.css'
import Head from 'next/head'
import Footer from '@/components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <title>Dennis Eum</title>
        <meta name="author" content="Dennis Eum"></meta>
        <meta
          name="description"
          content="Hello! My name is Dennis Eum, and I am a
          software engineer and mathematician studying at Harvard. Originally from Minnesota, I currently work at CESO and lead tech at HackHarvard."
        ></meta>
      </Head>
      <div className="flex min-h-screen flex-col">
        <main className="grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
