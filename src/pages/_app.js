import Head from 'next/head'

import Footer from '/src/components/footer'

import { UserContextProvider } from '/src/context/userContext'
import { ServiceContextProvider } from '/src/context/serviceContext'

import '/src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Mande</title>
      </Head>
      <UserContextProvider>
        <ServiceContextProvider>
          <Component {...pageProps} />
        </ServiceContextProvider>
      </UserContextProvider>
      <Footer />
    </>
  )
}

export default MyApp
