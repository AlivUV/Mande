import Login from '/src/components/login'
import useUser from '/src/hooks/useUser'

import styles from '/src/styles/Home.module.css'

import UserHome from '/src/components/userHome'
import WorkerHome from '/src/components/workerHome'

export default function Home() {
  const { isLogged, userInfo } = useUser()

  return (
    <div className={styles.container}>
      <main className={styles.main}>

        {
          (!isLogged)
            ? <Login />
            : (userInfo.tipoUsuario === 'Cliente')
              ? <UserHome />
              : <WorkerHome />
        }
      </main >

    </div >
  )
}
