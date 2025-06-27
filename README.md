# App Planificador de Gastos

Esta aplicación móvil permite gestionar y planificar tus gastos personales de manera sencilla y visual.

## Funcionalidades

- **Definir presupuesto:** El usuario puede establecer un presupuesto inicial para controlar sus gastos.
- **Agregar y editar gastos:** Permite registrar nuevos gastos, editarlos o eliminarlos según sea necesario.
- **Listado de gastos:** Visualiza todos los gastos registrados, mostrando detalles como nombre, cantidad y categoría.
- **Filtrado de gastos:** Filtra los gastos por categorías para un mejor análisis.
- **Cálculo automático:** Muestra el total gastado y el saldo restante en tiempo real.
- **Validaciones:** Valida que el presupuesto y los gastos sean valores correctos antes de agregarlos.
- **Contexto global:** Utiliza Context API para manejar el estado global de presupuesto y gastos.

## Tecnologías utilizadas

- React Native
- Context API de React

## Estructura principal

- `App.jsx`: Componente principal que gestiona el contexto y el estado global.
- `src/context/Presupuesto.js`: Contexto para manejar presupuesto y gastos.
- `src/components/PresupuestoApp.jsx`: Componente principal de la aplicación.

## Configuración

1. Clona este repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la app en tu emulador o dispositivo físico con `npx react-native run-android` o `npx react-native run-ios`.

---
