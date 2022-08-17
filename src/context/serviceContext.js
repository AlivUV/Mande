import React, { useState } from 'react'

const Context = React.createContext()

export function ServiceContextProvider({ children }) {
  const [availableServices, setAvailableServices] = useState(null)
  const [workersByService, setWorkersByService] = useState(null)

  return (
    <Context.Provider value={{ availableServices, setAvailableServices, workersByService, setWorkersByService }}>
      {children}
    </Context.Provider>
  );
}

export default Context