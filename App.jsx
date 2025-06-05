import React from 'react';
import { PresupuestoProvider } from './src/context/Presupuesto';
import { PresupuestoApp } from './src/components/PresupuestoApp';

const App = () => {
  

  return (
    <PresupuestoProvider>
      <PresupuestoApp/>
    </PresupuestoProvider>
  );
}

export default App;
