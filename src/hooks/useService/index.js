import { useCallback, useContext } from 'react'

import Context from '/src/context/serviceContext'

export default function useService() {
  const [AvailableServices, setAvailableServices] = useContext(Context)

  const updateServices = useCallback(() => {
    const URL = '/api/services/available'
    const data = {
    }

    fetch(
      URL,
      {
        method: 'POST'
      }
    )
      .then(response => response.json())
      .then(data => {
        if (data.estado === 200) {
          console.log('SUCCESS')
          //setAvailableServices(data)
        }

      })
      .catch(error => console.error(`Error: ${error}`))

  }, [/*setAvailableServices*/])

  return {
    updateServices
  }
}