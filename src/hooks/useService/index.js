import { useCallback, useContext } from 'react'

import Context from '/src/context/serviceContext'

export default function useService() {
  const { availableServices, setAvailableServices, workersByService, setWorkersByService } = useContext(Context)

  const addServices = useCallback(services => {
    availableServices
      ? setAvailableServices(services)
      : setAvailableServices(availableServices.append(services))
  }, [availableServices, setAvailableServices])

  const searchWorkersByService = useCallback(nombre => {

    const URL = '/api/services/workerByService'

    fetch(
      URL,
      {
        method: 'POST',
        body: JSON.stringify({ service: nombre })
      }
    )
      .then(response => response.json())
      .then(({ estado, mensaje, trabajadores }) => {
        switch (estado) {
          case 200:
            setWorkersByService(trabajadores)
            break
          case 404:
            setWorkersByService([])
            console.log('No hay trabajadores disponibles')
            break
          default:
            console.log(mensaje)
            break
        }

      })
      .catch(error => { console.error(`Error: ${error}`); return { props: {} } })
  }, [setWorkersByService])

  return {
    availableServices,
    addServices,
    isSelected: Boolean(workersByService),
    workersByService,
    searchWorkersByService,
    setWorkersByService
  }
}