/* eslint-disable react/prop-types */
import { NumberButton } from './NumberButton'
import '../components_styles/ButtonRow.css'

export function ButtonRow({ number1, number2, number3, text }) {
  return (
    <div className="row">
      <NumberButton number={number1} />
      <NumberButton number={number2} />
      <NumberButton number={number3} />
      <NumberButton number={text} />
    </div>
  )
}
