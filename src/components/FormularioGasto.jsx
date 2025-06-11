import { Picker } from '@react-native-picker/picker'
import React, { useContext, useEffect } from 'react'
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import { globalStyles } from '../styles/index'
import { usePresupuesto } from '../hooks/usePresupuesto'
import { useFormStateGasto } from '../hooks/useFormStateGasto'
import { PresupuestoContext } from '../context/Presupuesto'
import { GenerarID } from '../helpers/GenerarId'

export const FormularioGasto = ({setModalGasto}) => {

    const { gastos ,setGastos, gasto, setGasto } = useContext(PresupuestoContext)
    const { id, setId, fecha, setFecha,nombre, setNombre, cantidad, setCantidad, categoria, setcategoria, 
        validarCampos ,validarCantidad, validarNombre, validarCategoria, resetForm } = useFormStateGasto()

    useEffect(() => {
      if (gasto?.id) {
        setNombre(gasto.nombre)
        setCantidad(gasto.cantidad.toString())
        setcategoria(gasto.categoria)
        setId(gasto.id)
        setFecha(gasto.fecha)
      }
    }, [gasto])
    
    const handleCloseModal = () => {
     setModalGasto(false)
     resetForm()
    }

    const handleGasto = () => {

        // Validaciones
        if (validarCampos(nombre, cantidad, categoria) === false) {
            return Alert.alert(
                 'Error',
                 'Todos los campos son obligatorios',
                 [
                   { text: 'OK' }
                 ]
               )
        }

        if(validarCantidad(cantidad) === false) {
            return Alert.alert(
                  'Error',
                  'Cantidad de gasto no es válido',
                  [
                    { text: 'OK' }
                  ]
                )

        }
        if(validarNombre(nombre) === false) {
            return Alert.alert(
                 'Error',
                 'El nombre del gasto debe tener al menos 3 caracteres',
                 [
                   { text: 'OK' }
                 ]
               )
        }
        if(validarCategoria(categoria) === false) {
            return Alert.alert(
                 'Error',
                 'Debe seleccionar una categoría',
                 [
                   { text: 'OK' }
                 ]
               )
        }

        if (nombre && cantidad && categoria) {
            
            if (gasto.id) {
                const actualizarGasto = gastos.map(gastoState =>
                    gastoState.id === gasto.id ? gasto : gastoState
                )
                setGastos(actualizarGasto)

            } else {
                const nuevoGasto = {
                    id: GenerarID(),
                    fecha: Date.now(),
                    nombre,
                    cantidad: Number(cantidad),
                    categoria,
                }

                setGastos(gastos => [...gastos, nuevoGasto])
                resetForm();
                Alert.alert(
                    'Gasto Agregado',
                    'El gasto se ha agregado correctamente',
                    [
                        { text: 'OK' }
                    ]
                )
            }
        }
    }

    const handleEliminarGasto = (id) => {
        Alert.alert(
            '¿Deseas eliminar este gasto?',
            'Esta acción no se puede deshacer',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel',
                },
                {
                    text: 'Eliminar',
                    onPress: () => {
                        const gastosActualizados = gastos.filter(gastoState => gastoState.id !== id)
                        setGastos(gastosActualizados)
                        setGasto({})
                        resetForm();
                        setModalGasto(false);
                    },
                    style: 'destructive',
                },
            ]
        )
    }

  return (
    <SafeAreaView style={styles.contenedor}>
        <View style={styles.contenedorBotones}>
            <Pressable
                onPress={handleCloseModal()} 
                style={[styles.btn,styles.btnCancelar]}>
                <Text style={styles.btnTexto}>Cancelar</Text>
            </Pressable>

            { !!id && 
                <Pressable
                    onLongPress={handleEliminarGasto(id)} 
                    style={[styles.btn,styles.btnEliminar]}>
                    <Text style={styles.btnTexto}>Eliminar</Text>
                </Pressable>
            }
            
        </View>

        <View style={styles.formulario}>
            <Text style={styles.titulo}>
                {gasto?.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</Text>

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

            <Pressable 
                style={styles.submitBtn}
                onPress={handleGasto}
            >
                <Text style={styles.submitBtnTexto}>
                    {gasto?.nombre ? 'Guardar Cambios' : 'Agregar Gasto'}</Text>
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
    contenedorBotones: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    btn: {
        padding: 10,
        marginTop: 30,
        marginHorizontal: 10,
        flex: 1,
        borderRadius: 15,
    },
    btnCancelar: {
        backgroundColor: '#DB2777',
    },
    btnEliminar: {
        backgroundColor: 'red',
    },
    btnTexto: {
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
    inputPicker: {
        backgroundColor: '#f5f5f5',
        marginTop: 8,
        color: '#64748B',
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
