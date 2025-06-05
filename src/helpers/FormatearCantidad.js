export const FormatearCantidad = (cantidad) => {
  return cantidad.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });
}