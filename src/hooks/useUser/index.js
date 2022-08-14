import { useCallback, useContext } from 'react'

import Context from '/src/context/userContext'

export default function useUser() {
  const { jwt, setJWT, userInfo, setUserInfo } = useContext(Context)

  const login = useCallback((usuario, contrasena) => {
    const URL = '/api/login'
    const data = {
      usuario: usuario,
      contrasena: contrasena
    }

    console.log('AAAAAAAAAAAAAAAAAAA')

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
          console.log(data)
          setJWT('Logueado.')
          setUserInfo({ tipoUsuario: data.userType })
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT, setUserInfo])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  const userRegister = useCallback(data => {
    const URL = '/api/userRegister'

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
          return console.log('SUCCESS')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [])

  const workerRegister = useCallback((usuario, contrasena) => {
    const URL = '/api/login'
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
    userInfo,
    userRegister,
    workerRegister
  }
}