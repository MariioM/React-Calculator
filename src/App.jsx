import { useState } from 'react'
import { NumberButton } from './components/NumberButton'
import { OperatorButton } from './components/OperatorButton'
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
          <OperatorButton updateScreen={updateScreen} sign="AC" />
          <OperatorButton updateScreen={updateScreen} sign="C" />
          <OperatorButton updateScreen={updateScreen} sign="+" />
          <OperatorButton updateScreen={updateScreen} sign="-" />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="1" />
          <NumberButton updateScreen={updateScreen} number="2" />
          <NumberButton updateScreen={updateScreen} number="3" />
          <OperatorButton updateScreen={updateScreen} sign="x" />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="4" />
          <NumberButton updateScreen={updateScreen} number="5" />
          <NumberButton updateScreen={updateScreen} number="6" />
          <OperatorButton updateScreen={updateScreen} sign="/" />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="7" />
          <NumberButton updateScreen={updateScreen} number="8" />
          <NumberButton updateScreen={updateScreen} number="9" />
          <OperatorButton updateScreen={updateScreen} sign="=" />
        </div>
      </div>
    </main>
  )
}

export default App
