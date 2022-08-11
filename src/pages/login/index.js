import { useRouter } from "next/Router"
import { useEffect, useState } from "react"
import { Formik } from 'formik'

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

  const handleSubmit = values => {
    router.push("/")
    login()
  }

  return (
    <div className={styles.login}>
      <Formik
        initialValues=
        {{
          usuario: "",
          contrasena: ""
        }}
        onSubmit={handleSubmit}
      >
        {
          ({ handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Digite su usuario"
                onChange={handleChange}
                name="usuario"
              />
              <input
                type={password}
                placeholder="Digite su contraseña"
                onChange={handleChange}
                name="contrasena"
              />
              <button>Login</button>
            </form>
          )
        }
      </Formik>
    </div >
  );
}