import { useCallback, useContext, useEffect } from 'react'

import Context from '../context/userContext'

export default function useUser() {
  const { jwt, setJWT, setUserType } = useContext(Context)

  const login = useCallback((usuario, contrasena) => {
    const URL = "/api/login"
    const data = {
      usuario: usuario,
      contrasena: contrasena
    }

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.estado === 200) {
          setJWT('Logueado.')
          setUserType(data.userType)
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT, setUserType])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const userRegister = useCallback(data => {
    const URL = "/api/userRegister"

    console.log('AAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(data)

    fetch(
      URL,
      {
        method: 'PUT',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.estado === 200)
          //setJWT('Prueba.')
          return console.log('SUCCESS')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [])

  const workerRegister = useCallback((usuario, contrasena) => {
    const URL = "/api/login"
    const data = {
      usuario: usuario,
      contrasena: contrasena
    }

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify(data)
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.estado === 200)
          setJWT('Prueba.')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout,
    userRegister,
    workerRegister
  }
}