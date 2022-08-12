import Head from 'next/head'

import Login from '/src/components/login'
import Logged from '/src/components/logged'
import useUser from '/src/hooks/useUser'

import styles from '/src/styles/Home.module.css'

export default function Home() {
  const { isLogged } = useUser()

  return (
    <div className={styles.container}>
      <Head>
        <title>Mande</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido a <span className={styles.highlight}>mande!</span>
        </h1>

        <p className={styles.description}>
          Consigue personas trabajadoras, expertas y honestas para realizar a domicilio
          labores del día a día en el hogar. Si lo deseas también puedes ser parte de
          nuestro equipo de trabajo.
        </p>
        {
          (isLogged)
            ? <Logged />
            : <Login />
        }
      </main >

    </div >
  )
}
