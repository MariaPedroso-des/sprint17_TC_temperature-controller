// Recibe como props las funciones para subir, bajar y resetear la temperatura.
// Muestra tres botones con esas acciones.

//En los hijos no viven las funciones, sino que llaman a la lógica para su vista

export default function TemperatureControls ({
  sumar,
  restar,
  reset
}) {
  return (
    <>
      <button onClick={sumar}> + </button>
      <button onClick={restar}> - </button>
      <button onClick={reset}>Resetear historial</button>
    </>
  )
}