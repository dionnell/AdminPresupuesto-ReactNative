import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/index'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { FormatearCantidad } from '../helpers/FormatearCantidad'

export const ControlPresupuesto = () => {
       const { presupuesto } = usePresupuesto()
    
  return (
    <View style={styles.contenedor}>
        <View style={styles.centrarGrafica}>
            <Image 
                style={styles.imagen}
                source={require('../img/grafico.jpg')} 
            />
        </View>
        <View  style={styles.contenedorTexto}>
            <Text style={styles.valor}>
                <Text style={styles.label}>Presupuesto: </Text>
                ${FormatearCantidad(presupuesto)}
            </Text>

            <Text style={styles.valor}>
                <Text style={styles.label}>Disponible: </Text>
                ${FormatearCantidad(presupuesto)}
            </Text>

            <Text style={styles.valor}>
                <Text style={styles.label}>Gastado: </Text>
                ${FormatearCantidad(presupuesto)}
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
    },
    centrarGrafica: {
        alignItems: 'center',
    },
    imagen: {
        width: 250,
        height: 250,
    },
    contenedorTexto: {
        marginTop: 50,
    },
    valor: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 10,
    }, 
    label: {
        fontWeight: '700',
        color: '3B82F6'
    },
})