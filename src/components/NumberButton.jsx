/* eslint-disable react/prop-types */
import '../components_styles/NumberButton.css'

export function NumberButton({ number }) {
  return (
    <div className="button-container">
      <p>{number}</p>
    </div>
  )
}
