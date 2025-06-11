import React, { useContext, useEffect } from 'react';
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { usePresupuesto } from '../hooks/usePresupuesto';

import { Headers } from './Headers';
import { NuevoPresupuesto } from './NuevoPresupuesto';
import { ControlPresupuesto } from './ControlPresupuesto';
import { FormularioGasto } from './FormularioGasto';
import { PresupuestoContext } from '../context/Presupuesto';
import { ListadoGastos } from './ListadoGastos';
import { Filtro } from './Filtro';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const PresupuestoApp = () => {
 
   const { isValid, setIsValid, presupuesto, setPresupuesto, gastos, setGastos } = usePresupuesto()
   const [modalGasto, setModalGasto] = useState(false)

   useEffect(() => {
      const obtenerPresupuestoStorage = async () => {
        try {
          const presupuestoStorage = await AsyncStorage.getItem('planificador_presupuesto') ?? 0

          if(presupuestoStorage > 0){
            setPresupuesto(presupuestoStorage)
            setIsValid(true)
          }
        } catch (error) {
          console.error('Error al obtener el presupuesto del almacenamiento:', error);
        }
      }
      obtenerPresupuestoStorage();
   }, [])
   
   useEffect(() => {
     if( isValid) {
       const guardarPresupuestoStorage = async () => {
          try {
            await AsyncStorage.setItem(
              'planificador_presupuesto',
              presupuesto
            )
          } catch (error) {
            console.error('Error al guardar el presupuesto en el almacenamiento:', error);
          }
       }
        guardarPresupuestoStorage();
     }
   }, [isValid])
 
   useEffect(() => {
     const obtenerGastosStorage = async () => {
        try {
          const gastosStorage = await AsyncStorage.getItem('planificador_gastos' )
        
          setGastos( gastosStorage ? JSON.parse(gastosStorage) : [])
        } catch (error) {
          console.log(error)
        }
     }
     obtenerGastosStorage()
   }, [])
   

   useEffect(() => {
     const guardarGastosStorage = async() => {
        try {
          await AsyncStorage.setItem(
            'planificador_gastos',
            JSON.stringify(gastos)
          )
        } catch (error) {
          console.log(error)
        }
     }
     guardarGastosStorage()
   }, [gastos])
   
 
   const handleOpenModal = () => {
     setModalGasto(true)
   }

   return (
     <View style={styles.contenedor}>
      <ScrollView>
        <View style={styles.header}>
           <Headers />
           {isValid ? 
             <ControlPresupuesto/>
           : <NuevoPresupuesto />}
        </View>

        {isValid &&
          <>
            <Filtro/>
            <ListadoGastos
              setModalGasto={setModalGasto} 
            />
          </>
        }

      </ScrollView>

      {modalGasto && (
        <Modal
          animationType='slide'
          visible={modalGasto}
        >
          <FormularioGasto
            setModalGasto={setModalGasto}
          />
        </Modal>
      )}

       {isValid && 
       ( 
        <Pressable
          style={styles.Pressable}
          onPress={handleOpenModal()}
        >
          <Image
            style={styles.imagen}
            source={require('../img/nuevo-gasto.png')}
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
  Pressable: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
  },
  imagen: {
    width: 60,
    height: 60,
    
  }
});
 

