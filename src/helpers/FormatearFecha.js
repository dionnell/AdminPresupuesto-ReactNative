export const FormatearFecha = (fecha) => {
  const opciones = { 
        year: '2-digit', 
        month: '2-digit', 
        day: '2-digit' };
  return new Date(fecha).toLocaleDateString('es-CL', opciones);
}