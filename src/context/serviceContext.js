import React, { useState } from 'react'

const Context = React.createContext()

export function ServiceContextProvider({ children }) {
  const [availableServices, setAvailableServices] = useState([
    {
      nombre,
      descripción,

    }
  ])

  return (
    <Context.Provider value={{ availableServices, setAvailableServices }}>
      {children}
    </Context.Provider>
  );
}

export default Context