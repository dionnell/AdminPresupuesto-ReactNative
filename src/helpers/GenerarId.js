export const GenerarID = () => {
    const random = Math.random().toString(36).substring(2, 9);
    const fecha = Date.now().toString(36);
    return random + fecha;
}