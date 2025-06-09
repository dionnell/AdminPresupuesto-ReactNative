import React, { createContext, useState } from 'react'

export const FormStateContext = createContext()

export function FormStateProvider ({ children }) {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad ] = useState('')
    const [categoria, setcategoria] = useState('')
   
    return (
    <FormStateContext.Provider value={{
      nombre, setNombre,
      cantidad, setCantidad,
      categoria, setcategoria
    }}
    >
      {children}
    </FormStateContext.Provider>
  )
}