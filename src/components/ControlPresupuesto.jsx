import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { globalStyles } from '../styles/index'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { FormatearCantidad } from '../helpers/FormatearCantidad'
import { PresupuestoContext } from '../context/Presupuesto'
import CircularProgress from 'react-native-circular-progress-indicator'

export const ControlPresupuesto = () => {
       const { presupuesto, gastos } = useContext(PresupuestoContext)
       const [disponible, setDisponible] = useState(0)
       const [gastado, setGastado] = useState(0)
       const [porcentaje, setPorcentaje] = useState(0)
    
       useEffect(() => {
            const totalGastado = gastos.reduce( (total, gasto) => Number(gasto.cantidad) + total, 0 )
            const totalDisponible = presupuesto - totalGastado
            const porcentajeGastado = ((presupuesto - totalDisponible)/ presupuesto) * 100
            
            setTimeout(() => {
            setPorcentaje(porcentajeGastado)
            }, 1000)
            
            setGastado(totalGastado)
            setDisponible(totalDisponible)
       }, [gastos, presupuesto])
       

  return (
    <View style={styles.contenedor}>
        <View style={styles.centrarGrafica}>
            <CircularProgress 
                value={porcentaje}
                duration={1000}
                maxValue={presupuesto}
                radius={150}
                valueSuffix={'%'}
                title='Gastado'
                inActiveStrokeColor='#f5f5f5'
                inActiveStrokeWidth={20}
                activeStrokeColor='#3B82F6'
                activeStrokeWidth={20}
                titleStyle={{ fontSize: 25, fontWeight: 'bold' }}
                titleColor='#64748B'
            />
        </View>
        <View  style={styles.contenedorTexto}>
            <Text style={styles.valor}>
                <Text style={styles.label}>Presupuesto: </Text>
                {FormatearCantidad(Number(presupuesto))}
            </Text>

            <Text style={styles.valor}>
                <Text style={styles.label}>Disponible: </Text>
                {FormatearCantidad(disponible)}
            </Text>

            <Text style={styles.valor}>
                <Text style={styles.label}>Gastado: </Text>
                {FormatearCantidad(gastado)}
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
        width: 200,
        height: 200,
    },
    contenedorTexto: {
        marginTop: 20,
    },
    valor: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    }, 
    label: {
        fontWeight: '700',
        color: '3B82F6'
    },
})