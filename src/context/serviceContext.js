import React, { useState } from 'react'

const Context = React.createContext()

export function ServiceContextProvider({ children }) {
  const [availableServices, setAvailableServices] = useState([
    {
      nombre: 'Paseo de mascotas',
      descripción: 'Se pasean mascotas',

    }
  ])

  return (
    <Context.Provider value={{ availableServices, setAvailableServices }}>
      {children}
    </Context.Provider>
  );
}

export default Context