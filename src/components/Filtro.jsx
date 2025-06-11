import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { globalStyles } from '../styles'
import { Text } from 'react-native-svg'
import { usePresupuesto } from '../hooks/usePresupuesto'

export const Filtro = () => {
      const { filtro, setFiltro, gastos, setGastoFiltrado } = usePresupuesto()
    
      useEffect(() => {
        if(filtro === '') {
            setGastoFiltrado([])
        } else {
            const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
            setGastoFiltrado(gastosFiltrados)
        }
      }, [filtro])
  return (
    <View style={styles.contenedor}>
        <Text style={styles.label}>Filtrar Gastos</Text>

        <Picker
            selectedValue={filtro}
            onValueChange={(itemValue) => setFiltro(itemValue)}
            style={styles.inputPicker}
            dropdownIconColor='#64748B'
            //mode='dialog' // 'dialog' or 'dropdown'
        >
            <Picker.Item label=' -- Seleccione --' value='' />
            <Picker.Item label='Ahorro' value='ahorro' />
            <Picker.Item label='Comida' value='comida' />
            <Picker.Item label='Casa' value='casa' />
            <Picker.Item label='Gastos Varios' value='gastos' />
            <Picker.Item label='Ocio' value='ocio' />
            <Picker.Item label='Salud' value='salud' />
            <Picker.Item label='Suscripciones' value='suscripciones' />
        </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    ...globalStyles.contenedor,
    transform: [{ translateY: 0 }],
    marginTop: 50,
  },
  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748B',
  },
  inputPicker: {
        backgroundColor: '#f5f5f5',
        marginTop: 8,
        color: '#64748B',
    },
})