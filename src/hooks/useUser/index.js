import { useCallback, useContext } from 'react'

import Context from '/src/context/userContext'

import useService from '../useService'

export default function useUser() {
  const { jwt, setJWT, userInfo, setUserInfo } = useContext(Context)

  const { addServices } = useService()

  const login = useCallback((usuario, contrasena) => {
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
      .then(({ estado, mensaje, userType }) => {
        switch (estado) {
          case 200:
            setUserInfo({ tipoUsuario: userType })
            setJWT('Logueado.')
            addServices(
              [
                { nombre: 'Paseo de mascotas', descripcion: 'Se pasean mascotas' }
              ])
            break
          case 404:
            console.log('Usuario incorrecto.')
            break
          case 400:
            console.log('Contraseña incorrecta.')
            break
          default:
            console.log('Error.')
            break
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT, setUserInfo, addServices])

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