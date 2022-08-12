import { useRouter } from "next/Router"
import { useCallback, useEffect, useState } from "react"
import { Formik } from 'formik'

import styles from '../../styles/Home.module.css'

import useUser from "../../hooks/useUser"

export default function Login() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const { login, logout, isLogged } = useUser()

  useEffect(() => {
    if (isLogged) router.push("/")
  }, [isLogged, router])

  const handleSubmit = ({ usuario, contrasena }) => {
    return login(usuario, contrasena)
  }

  const handleCancel = (evt) => {
    evt.preventDefault()
    return router.push("/")
  }

  const handleShow = (evt) => {
    evt.preventDefault()
    const boton = document.getElementById("passwordField")

    boton.type = (boton.type === 'text') ? 'password' : 'text'
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
              <div>
                <input
                  id="passwordField"
                  type="password"
                  placeholder="Digite su contraseña"
                  onChange={handleChange}
                  name="contrasena"
                />
                <button onClick={handleShow}>👁️</button>
              </div>
              <div>
                <button>Login</button>
                <button onClick={handleCancel}>Cancelar</button>
              </div>
            </form>
          )
        }
      </Formik>
    </div >
  );
}