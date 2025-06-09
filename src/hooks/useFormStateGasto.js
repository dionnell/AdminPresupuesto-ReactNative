import React, { useContext } from 'react'
import { FormStateContext } from '../context/FormState'

export function useFormStateGasto  ()  {
 const { nombre, setNombre,
      cantidad, setCantidad,
      categoria, setcategoria } = useContext(FormStateContext)
     
   return {
        nombre, setNombre,
        cantidad, setCantidad,
        categoria, setcategoria
   }
}

