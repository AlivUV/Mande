import { useRouter } from "next/Router"
import { useEffect, useState } from "react"

import styles from '../../styles/Home.module.css'

import useUser from "../../hooks/useUser"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const { login, logout, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) {
      router.push("/")
      logout()
    }
  }, [isLogged, logout, router])

  const handleSubmit = evt => {
    evt.preventDefault()
    router.push("/")
    login()
  }

  return (
    <div className={styles.login}>
      <formik>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="username"
            onChange={evt => setUsername(evt.target.value)}
            value={username}
          />
          <input
            type={password}
            placeholder="password"
            onChange={evt => setPassword(evt.target.value)}
            value={password}
          />
          <button>Login</button>
        </form>
      </formik>
    </div >
  );
}