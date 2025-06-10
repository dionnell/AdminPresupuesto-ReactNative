import React from 'react'
import { Text, View, StyleSheet, Image, Pressable } from 'react-native'
import { globalStyles } from '../styles';
import { FormatearCantidad } from '../helpers/FormatearCantidad';
import { FormatearFecha } from '../helpers/FormatearFecha';
import { usePresupuesto } from '../hooks/usePresupuesto';

const diccionarioIconos = {
    comida: require('../img/icono_comida.png'),
    ahorro: require('../img/icono_ahorro.png'),
    casa: require('../img/icono_casa.png'),
    ocio: require('../img/icono_ocio.png'),
    salud: require('../img/icono_salud.png'),
    suscripciones: require('../img/icono_suscripciones.png'),
    gastos: require('../img/icono_gastos.png'),
}

export const Gasto = ({gasto, setModalGasto}) => {
    const {nombre, categoria, cantidad, fecha, id} = gasto;
    const { setGasto } = usePresupuesto()
    

    const handleAcciones = () => {
        setModalGasto(true)
        setGasto(gasto)
    }
  return (
    <Pressable
        onLongPress={handleAcciones}
    >
        <View style={styles.contenedor}>
            <View style={styles.contenido}>
                <View style={styles.contenedorImagen}>
                    <Image
                        style={styles.imagen}
                        source={diccionarioIconos[categoria] || require('../img/icono_gastos.png')}
                    />

                    <View style={styles.contenedorTexto}>
                        <Text style={styles.categoria}>{categoria}</Text>
                        <Text style={styles.nombre}>{nombre}</Text>
                        <Text style={styles.fecha}>{FormatearFecha(fecha)}</Text>
                    </View>
                </View>
                <Text style={styles.cantidad}>{FormatearCantidad(cantidad)}</Text>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    contenedor: {
        ...globalStyles.contenedor,
        marginBottom: 20,
    },
    contenido: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contenedorImagen: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    imagen: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    contenedorTexto: {
        flex: 1,
    },
    categoria: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#94A3B8',
        textTransform: 'uppercase',
        marginBottom: 5,
    },
    nombre: {
        fontSize: 22,
        color: '#64748B',
        marginBottom: 5,
    },
    cantidad: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    fecha: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DB2777',
    },
})