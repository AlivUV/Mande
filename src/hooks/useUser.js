import { useCallback, useContext } from 'react'

import Context from '../context/userContext'

export default function useUser() {
  const { jwt, setJWT } = useContext(Context)

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
        if (data.estado === 200)
          setJWT('Prueba.')

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [setJWT])

  const logout = useCallback(() => {
    setJWT(null)
  }, [setJWT])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}