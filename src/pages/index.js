import Login from '/src/components/login'
import useUser from '/src/hooks/useUser'

import styles from '/src/styles/Home.module.css'

import UserHome from '../components/userHome'
import WorkerHome from '../components/workerHome'

export default function Home() {
  const { isLogged } = useUser()

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        
        {
          (isLogged)
            ? <UserHome />
            : <WorkerHome />
        }
      </main >

    </div >
  )
}
