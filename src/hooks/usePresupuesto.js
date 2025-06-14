import React, { useContext } from 'react'
import { PresupuestoContext } from '../context/Presupuesto'

export function usePresupuesto  ()  {
    const { presupuesto, setPresupuesto, setIsValid, isValid,
       gastos, setGastos, gasto, setGasto,filtro, setFiltro,
            gastoFiltrado, setGastoFiltrado } = useContext(PresupuestoContext)

     
  return {
    presupuesto, setPresupuesto,
    setIsValid, isValid,
    gastos, setGastos,
    gasto, setGasto, 
    filtro, setFiltro,
    gastoFiltrado, setGastoFiltrado
  }
}

