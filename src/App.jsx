import './App.css'
import {useState} from 'react'
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureControls from './components/TemperatureControls'
import HistoryList from './components/HistoryList'

export default function App() {
  const [temperatura, setTemperatura] = useState(20)
  const [history, setHistory] = useState([])

  const updateTemperatura = (newTemperatura) => {
    setTemperatura(newTemperatura)
      
    const newDate = {
        time: new Date().toLocaleTimeString(),
        value: newTemperatura
      }
    
    setHistory(prev => [...prev, newDate])
  }

  const sumar = () => {
    updateTemperatura(temperatura + 1)
  }

  const restar = () => {
    updateTemperatura(temperatura - 1)
  }

  const reset = () => {
    setTemperatura(20)
    setHistory([])
  }

  return (
    <>
      <div className="app">
        <h1>Controlador de temperatura</h1>
      </div>
      <TemperatureDisplay temperatura={temperatura}/>
      <TemperatureControls 
        sumar={sumar}
        restar={restar}
        reset={reset}
      />
      <div>
          <HistoryList history={history} />
      </div>
    </>
  )
}