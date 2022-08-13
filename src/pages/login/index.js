import { useRouter } from "next/Router"
import { useCallback, useEffect, useState } from "react"
import { Formik } from 'formik'

import styles from '/src/styles/Home.module.css'

import useUser from "/src/hooks/useUser"

export default function Login() {
  const router = useRouter()

  const { login, isLogged } = useUser()

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
              <input
                id="passwordField"
                type="password"
                placeholder="Digite su contraseña"
                onChange={handleChange}
                name="contrasena"
              />
              <div className={styles.divBotones}>
                <button>Login</button>
                <button onClick={handleCancel}>Cancelar</button>
                <button onClick={handleShow}>👁️</button>
              </div>
            </form>
          )
        }
      </Formik>
    </div >
  );
}