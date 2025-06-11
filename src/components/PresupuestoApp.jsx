import React, { useContext } from 'react';
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

export const PresupuestoApp = () => {
 
   const { isValid } = useContext(PresupuestoContext)
   const [modalGasto, setModalGasto] = useState(false)

 
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
 

