import React, { useState } from 'react';
import {
  Image,
  Modal,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import { Headers } from './Headers';
import { NuevoPresupuesto } from './NuevoPresupuesto';
import { ControlPresupuesto } from './ControlPresupuesto';
import { usePresupuesto } from '../hooks/usePresupuesto';
import { FormularioGasto } from './FormularioGasto';

export const PresupuestoApp = () => {
 
   const { isValid, modalP, setModalP } = usePresupuesto()
 
   return (
     <View style={styles.contenedor}>
       <View style={styles.header}>
          <Headers />
          {isValid ? 
            <ControlPresupuesto/>
          : <NuevoPresupuesto />}
       </View>

        {modalP && (
          <Modal
            animationType='slide'
            visible={modalP}
            onRequestClose={() => setModalP(!modalP)}
          >
            <FormularioGasto
            />
          </Modal>
        )}
       {isValid && 
       ( 
        <Pressable
          onPress={() => setModalP(!modalP)}
        >
          <Image
            style={styles.imagen}
            source={require('..img/nuevo-gasto.png')}
          />
        </Pressable>
        )}
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
  imagen: {
    width: 60,
    height: 60,
    position: 'absolute',
    top: 120,
    right: 20,
  }
});
 

