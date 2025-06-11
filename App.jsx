import React, { useState } from 'react';
import { PresupuestoContext, PresupuestoProvider } from './src/context/Presupuesto';
import { PresupuestoApp } from './src/components/PresupuestoApp';
 
const App = () => {
  
  const [presupuesto, setPresupuesto] = useState('')
  const [ isValid, setIsValid ] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
  const [filtro, setFiltro] = useState('')    
  const [gastoFiltrado, setGastoFiltrado] = useState([])

  return (
      <PresupuestoContext.Provider value={{
            setPresupuesto,
            presupuesto,
            isValid, 
            setIsValid,
            gastos,
            setGastos,
            gasto, setGasto,
            filtro, setFiltro,
            gastoFiltrado, setGastoFiltrado
          }}
          >
        <PresupuestoApp/>
      </PresupuestoContext.Provider>
  );
}

export default App;
