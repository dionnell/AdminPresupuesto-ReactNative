import React, {createContext, useState} from 'react'

export const PresupuestoContext = createContext()

export function PresupuestoProvider ({ children }) {
    const [presupuesto, setPresupuesto] = useState('')
    const [ isValid, setIsValid ] = useState(false)
    const [gastos, setGastos] = useState([])
    const [modalP, setModalP] = useState(false);
  
    return (
    <PresupuestoContext.Provider value={{
      setPresupuesto,
      presupuesto,
      isValid, 
      setIsValid,
      gastos,
      setGastos,
      modalP, 
      setModalP
    }}
    >
      {children}
    </PresupuestoContext.Provider>
  )
}