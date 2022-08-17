import React, { useState } from 'react'

const Context = React.createContext()

export function ServiceContextProvider({ children }) {
  const [availableServices, setAvailableServices] = useState([])
  const [workersByService, setWorkersByService] = useState([])

  return (
    <Context.Provider value={{ availableServices, setAvailableServices, workersByService, setWorkersByService }}>
      {children}
    </Context.Provider>
  );
}

export default Context