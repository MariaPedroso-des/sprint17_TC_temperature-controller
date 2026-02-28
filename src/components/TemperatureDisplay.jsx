// Recibe la temperatura como prop.
// Muestra el valor actual y un mensaje según el rango.

export default function TemperatureDisplay ({temperatura}) {
  let mensaje = ''
  let color = ''

  if(temperatura < 15) {
    mensaje = '¡Hace frío!'
    color = '#7690AC'
  } else if (temperatura <= 25) {
    mensaje = 'Temperatura agradable'
    color = '#F9B949'
  } else {
    mensaje = '¡Hace calor!'
    color = '#B32821'
  }

  return (
    <>
      <h2 style={{ color }}>Temperatura: {temperatura} °C</h2>
      <p>{mensaje}</p>
    </>
  )
}