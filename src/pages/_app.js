import Footer from '/src/components/footer'
import { UserContextProvider } from '/src/context/userContext'
import '/src/styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <UserContextProvider>
        <Component {...pageProps} />
      </UserContextProvider>
      <Footer />
    </>
  )
}

export default MyApp
