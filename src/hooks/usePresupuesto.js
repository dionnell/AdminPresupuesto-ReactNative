import React, { useContext } from 'react'
import { PresupuestoContext } from '../context/Presupuesto'

export function usePresupuesto  ()  {
    const { presupuesto, setPresupuesto, setIsValid, isValid } = useContext(PresupuestoContext)
    
  return {
    presupuesto,
    setPresupuesto,
    setIsValid,
    isValid
  }
}

