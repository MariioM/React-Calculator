import { useState } from 'react'
import { NumberButton } from './components/NumberButton'
import { Screen } from './components/Screen'
import './App.css'

function App() {
  const [screenValue, setScreenValue] = useState('')

  const updateScreen = (value) => {
    setScreenValue(screenValue + value)
  }
  return (
    <main>
      <div className="calc-body">
        <Screen result={screenValue} />
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="1" />
          <NumberButton updateScreen={updateScreen} number="2" />
          <NumberButton updateScreen={updateScreen} number="3" />
          <NumberButton updateScreen={updateScreen} number="4" />
        </div>
      </div>
    </main>
  )
}

export default App
