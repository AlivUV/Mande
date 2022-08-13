import { useCallback, useContext } from 'react'

import Context from '/src/context/serviceContext'

export default function useService() {
  const [availableServices, setAvailableServices] = useContext(Context)

  const addServices = useCallback(service => {
    setAvailableServices(availableServices.append(service))

  }, [availableServices, setAvailableServices])

  return {
    availableServices,
    addServices
  }
}