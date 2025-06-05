import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Headers } from './Headers';
import { NuevoPresupuesto } from './NuevoPresupuesto';
import { ControlPresupuesto } from './ControlPresupuesto';
import { usePresupuesto } from '../hooks/usePresupuesto';

export const PresupuestoApp = () => {
 
   const { isValid } = usePresupuesto()
 
   return (
     <View style={styles.contenedor}>
       <View style={styles.header}>
           <Headers />
           {isValid ? 
             <ControlPresupuesto/>
           : <NuevoPresupuesto />}
       </View>
     </View>
   );
}
 
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },
  header: {
    backgroundColor: '#3B82F6',
  },
});
 

