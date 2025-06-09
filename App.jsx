import React from 'react';
import { PresupuestoProvider } from './src/context/Presupuesto';
import { PresupuestoApp } from './src/components/PresupuestoApp';
import { FormStateProvider } from './src/context/FormState';

const App = () => {
  

  return (
    <FormStateProvider>
      <PresupuestoProvider>
        <PresupuestoApp/>
      </PresupuestoProvider>
    </FormStateProvider>
  );
}

export default App;
