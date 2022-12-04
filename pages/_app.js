import '@/styles/globals.css'
import Head from 'next/head'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
import { FirstLoadContext } from '@/lib/contexts'
import { useState } from 'react'

const env = process.env.NODE_ENV
if (env !== 'development') {
  fetch('/__/firebase/init.json')
    .then(async response => {
      const app = initializeApp(await response.json())
      getAnalytics(app)
    })
    .catch(response => console.log(response))
}

function MyApp({ Component, pageProps }) {
  const [firstLoad, setFirstLoad] = useState(false)
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
          software engineer and mathematician studying at Harvard. Based in
          Minnesota, I love experimenting with creations and am also an avid
          cellist and debater."
        ></meta>
      </Head>
      <div className="flex flex-col min-h-screen">
        <Menu />
        <main className="grow">
          <FirstLoadContext.Provider
            value={{ state: firstLoad, set: value => setFirstLoad(value) }}
          >
            <Component {...pageProps} />
          </FirstLoadContext.Provider>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default MyApp
