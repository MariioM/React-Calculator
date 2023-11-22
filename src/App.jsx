import { ButtonRow } from './components/ButtonRow'
import { Screen } from './components/Screen'
import './App.css'

function App() {
  return (
    <main>
      <div className="calc-body">
        <Screen result="0" />
        <ButtonRow number1="1" number2="2" number3="3" text="X" />
        <ButtonRow number1="4" number2="5" number3="6" text="-" />
        <ButtonRow number1="7" number2="8" number3="9" text="+" />
      </div>
    </main>
  )
}

export default App
