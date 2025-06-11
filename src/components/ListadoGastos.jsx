import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { PresupuestoContext } from '../context/Presupuesto'
import { Gasto } from './Gasto'

export const ListadoGastos = ({setModalGasto}) => {
    const { gastos, setGastos, filtro, gastosFiltrados } = useContext(PresupuestoContext)
    
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Gastos</Text>
        
        {filtro ? gastosFiltrados.map( gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastos={setGastos}
                setModalGasto={setModalGasto}
            />
        )) : (
            gastos.map( gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                    setGastos={setGastos}
                    setModalGasto={setModalGasto}
                />
            ))

        )}

        {(gastos.length === 0 || (gastosFiltrados === 0 && !!filtro) ) && ( 
            <Text style={styles.noGastos}>No hay gastos registrados</Text>
        )}
    </View>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        marginTop: 20,
        marginBottom: 100
    },
    titulo: {
        marginTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#64748B',
        textAlign: 'center',
    },
    noGastos: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,

    }
})