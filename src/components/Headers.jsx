import React from 'react'
import { Text, StyleSheet, SafeAreaView } from 'react-native'

export const Headers = () => {
  return (
    <SafeAreaView>
      <Text style={styles.texto}>Planificador de Gastos</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  
  texto: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
    textTransform: 'uppercase',
    paddingVertical: 20,
    paddingTop: 20,
  },
})