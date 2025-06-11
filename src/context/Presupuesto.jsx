import React, {createContext, useState} from 'react'

export const PresupuestoContext = createContext()

export function PresupuestoProvider ({ children }) {
    const [presupuesto, setPresupuesto] = useState('')
    const [ isValid, setIsValid ] = useState(false)
    const [gastos, setGastos] = useState([])
    const [gasto, setGasto] = useState({})
    const [filtro, setFiltro] = useState('')    
    const [gastoFiltrado, setGastoFiltrado] = useState([])
  
    return (
    <PresupuestoContext.Provider value={{
      setPresupuesto,presupuesto,
      isValid, setIsValid,
      gastos, setGastos,
      modalP, setModalP,
      gasto, setGasto,
      filtro, setFiltro,
      gastoFiltrado, setGastoFiltrado
    }}
    >
      {children}
    </PresupuestoContext.Provider>
  )
}