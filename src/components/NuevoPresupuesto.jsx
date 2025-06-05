import React from 'react'
import { Pressable, Text, TextInput, View, StyleSheet, Alert } from 'react-native'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { globalStyles } from '../styles/index'

export const NuevoPresupuesto = () => {

  const { presupuesto, setPresupuesto, setIsValid } = usePresupuesto()

  const handleNuevoPresupuesto = (presupuesto) => {
    if (!presupuesto || Number(presupuesto) <= 0 || isNaN(Number(presupuesto))) {
      Alert.alert(
        'Error',
        'El presupuesto no es válido',
        [
          { text: 'OK' }
        ]
      )
    } else {
      setIsValid(true);
    }
  }

  return (
    <View style={styles.contenedor}>
        <Text
          style={styles.label}
        >
          Definir Presupuesto
        </Text>

        <TextInput
          keyboardType='numeric'
          placeholder='Añade tu presupuesto: Ej 1000'
          style={styles.input}
          value={presupuesto.toString()}
          onChangeText={ setPresupuesto}        
        />
        <Pressable 
          onPress={ () => handleNuevoPresupuesto(presupuesto) }
          style={styles.boton}
        >
            <Text style={styles.botonTexto}>Agregar</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
       ...globalStyles.contenedor,
    },
    label:{
      textAlign: 'center',
      fontSize: 24,
      color: '#3B82F6',
      fontWeight: 'bold',
    },
    input: {
      backgroundColor: '#F5F5F5',
      padding: 10,
      borderRadius: 10,
      marginTop: 30,
      textAlign: 'center',
    },
    boton: {
      marginTop: 30,
      backgroundColor: '#1048A4',
      padding: 10,
      borderRadius: 10,
    },
    botonTexto:{
      color: '#FFF',
      textAlign: 'center',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    }
})