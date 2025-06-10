import React, { useState } from 'react'

export function useFormStateGasto  ()  {
     const [ nombre, setNombre] = useState('')
     const [ cantidad, setCantidad] = useState('')
     const [ categoria, setcategoria] = useState('')
     const [id, setId] = useState('')
     const [fecha, setFecha] = useState('')

     // Validaciones
         
     const validarCantidad = (cantidad) => {
          const cantidadNumerica = Number(cantidad);
          if (!cantidadNumerica || cantidadNumerica <= 0 || isNaN(cantidadNumerica)) {
               return false
          }
     }
     const validarNombre = (nombre) => {
          nombre = nombre.trim();
          if (nombre.length < 3) {
               return false
          }
     }
     const validarCategoria = (categoria) => {
          if (!categoria) {
               return false
          }
     }

     const validarCampos = (nombre, cantidad, categoria) => {
          if (nombre === '' && cantidad === '' && categoria === '') {
               return false 
          }
     
     }

     const resetForm = () => {
          setNombre('');
          setCantidad('');
          setcategoria('');
          setId('');
          setFecha('');
     }

   return {
        nombre, setNombre,
        cantidad, setCantidad,
        categoria, setcategoria,
        id, setId,
        fecha, setFecha,
        validarCampos,
        validarCantidad,
        validarNombre,
        validarCategoria,
        resetForm
     }
}

