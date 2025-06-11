import React, { useContext, useEffect, useState } from 'react'
import { Text, View, StyleSheet, Pressable, Alert } from 'react-native'
import { globalStyles } from '../styles/index'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { FormatearCantidad } from '../helpers/FormatearCantidad'
import { PresupuestoContext } from '../context/Presupuesto'
import CircularProgress from 'react-native-circular-progress-indicator'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const ControlPresupuesto = () => {
       const { presupuesto, setPresupuesto, gastos, setGastos, setIsValid } = usePresupuesto()
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

       const resetarApp = () => {
            Alert.alert(
                'Dedea resetear la App?',
                'Esto eliminara el presupuesto y los gastos',
                [
                    {text: 'No', style: 'cancel'},
                    {text: 'Si, Eliminar', style:'destructive', onPress: async () => {
                        try {
                            await AsyncStorage.clear()

                            setIsValid(false)
                            setPresupuesto(0)
                            setGastos([])
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                ]
            )
       }

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
            
            <Pressable
                onLongPress={resetarApp}
                style={styles.boton}
            >
                <Text style={styles.TextoBoton}>Reiniciar App</Text>
            </Pressable>

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
    boton: {
        backgroundColor: '#DB2777',
        padding: 10,
        marginBottom: 30,
        borderRadius: 10
    },
    TextoBoton: {
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase'
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