import React, {createContext, useState} from 'react'

export const PresupuestoContext = createContext()

export function PresupuestoProvider ({ children }) {
    const [presupuesto, setPresupuesto] = useState(0)
    const [ isValid, setIsValid ] = useState(false)
  
  return (
    <PresupuestoContext.Provider value={{
      setPresupuesto,
      presupuesto,
      isValid, 
      setIsValid
    }}
    >
      {children}
    </PresupuestoContext.Provider>
  )
}