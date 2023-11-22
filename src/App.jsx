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

  const calculateResult = () => {
    setScreenValue(eval(screenValue).toString())
  }

  return (
    <main>
      <div className="calc-body">
        <Screen result={screenValue} />
        <div className="row">
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="AC"
          />
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="C"
          />
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="+"
          />
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="-"
          />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="1" />
          <NumberButton updateScreen={updateScreen} number="2" />
          <NumberButton updateScreen={updateScreen} number="3" />
          <OperatorButton updateScreen={updateScreen} sign="*" />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="4" />
          <NumberButton updateScreen={updateScreen} number="5" />
          <NumberButton updateScreen={updateScreen} number="6" />
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="/"
          />
        </div>
        <div className="row">
          <NumberButton updateScreen={updateScreen} number="7" />
          <NumberButton updateScreen={updateScreen} number="8" />
          <NumberButton updateScreen={updateScreen} number="9" />
          <OperatorButton
            calculateResult={calculateResult}
            updateScreen={updateScreen}
            sign="="
          />
        </div>
      </div>
    </main>
  )
}

export default App
