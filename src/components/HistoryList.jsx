// Muestra una lista con cada cambio de temperatura.
// Usa toLocaleTimeString() para formatear la hora.

export default function HistoryList({ history }) {
  return (
    <div>
      <h3>Historial de temperatura</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {history.map((item, index) => (
          <li key={index}>
            {item.value} °C || {item.time}
          </li>
        ))}
      </ul>
    </div>
  )
}