import { Picker } from '@react-native-picker/picker'
import React from 'react'
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/index'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { useFormStateGasto } from '../hooks/useFormStateGasto'

export const FormularioGasto = () => {

    const { setModalP } = usePresupuesto()
    const { nombre, setNombre, cantidad, setCantidad, categoria, setcategoria } = useFormStateGasto()

  return (
    <SafeAreaView style={styles.contenedor}>
        <View>
            <Pressable
                onLongPress={() => setModalP(false)} 
                style={styles.btnCancelar}>
                <Text style={styles.btnCancelarTexto}>Cancelar</Text>
            </Pressable>
        </View>

        <View style={styles.formulario}>
            <Text style={styles.titulo}>Nuevo Gasto</Text>

            <View style={styles.campo}>
                <Text style={styles.label}>Nombre del Gasto</Text>
                <TextInput
                    placeholder="nombre del gasto"
                    style={styles.input}
                    value={nombre}
                    onChangeText={setNombre}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Cantidad Gasto</Text>
                <TextInput
                    placeholder="Cantidad del gasto"
                    style={styles.input}
                    keyboardType="numeric"
                    value={cantidad}
                    onChangeText={setCantidad}
                />
            </View>

            <View style={styles.campo}>
                <Text style={styles.label}>Categoria Gasto</Text>
                <Picker
                    selectedValue={categoria}
                    onValueChange={(itemValue) => setcategoria(itemValue)}
                    mode='dropdown'
                >
                    <Picker.Item label='-- Seleccione --' value='' />
                    <Picker.Item label='Ahorro' value='ahorro' />
                    <Picker.Item label='Comida' value='comida' />
                    <Picker.Item label='Casa' value='casa' />
                    <Picker.Item label='Gastos Varios' value='gastos' />
                    <Picker.Item label='Ocio' value='ocio' />
                    <Picker.Item label='Salud' value='salud' />
                    <Picker.Item label='Suscripciones' value='suscripciones' />
                </Picker>
            </View>

            <Pressable style={styles.submitBtn}>
                <Text style={styles.submitBtnTexto}>Agregar Gasto</Text>
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: '#1E40AF',
        flex: 1,
    },
    btnCancelar: {
        backgroundColor: '#DB2777',
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
    },
    btnCancelarTexto: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    formulario: {
        ...globalStyles.contenedor,
    },
    titulo: {
        textAlign: 'center',
        fontSize: 28,
        marginBottom: 30,
        color: '#64748B',
    },
    campo: {
        marginVertical: 10,
    },
    label: {
        color: '#64748B',
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 10,
        marginTop: 8,
    },
    submitBtn: {
        backgroundColor: '#3B82F6',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    submitBtnTexto: {
        textAlign: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        textTransform: 'uppercase',
    },
});
