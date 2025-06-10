import React, { useState } from 'react';
import { PresupuestoContext, PresupuestoProvider } from './src/context/Presupuesto';
import { PresupuestoApp } from './src/components/PresupuestoApp';
 
const App = () => {
  
  const [presupuesto, setPresupuesto] = useState('')
  const [ isValid, setIsValid ] = useState(false)
  const [gastos, setGastos] = useState([])
  const [gasto, setGasto] = useState({})
      

  return (
      <PresupuestoContext.Provider value={{
            setPresupuesto,
            presupuesto,
            isValid, 
            setIsValid,
            gastos,
            setGastos,
            gasto, setGasto
          }}
          >
        <PresupuestoApp/>
      </PresupuestoContext.Provider>
  );
}

export default App;
