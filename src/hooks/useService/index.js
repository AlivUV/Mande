import { useCallback, useContext } from 'react'

import Context from '/src/context/serviceContext'

export default function useService() {
  const { availableServices, setAvailableServices } = useContext(Context)

  const addServices = useCallback(services => {
    availableServices
      ? setAvailableServices(services)
      : setAvailableServices(availableServices.append(services))
  }, [availableServices, setAvailableServices])

  return {
    availableServices,
    addServices
  }
}