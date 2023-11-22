/* eslint-disable react/prop-types */
import '../components_styles/NumberButton.css'

export function NumberButton({ number, updateScreen }) {
  const handleClick = () => {
    updateScreen(number)
  }

  return (
    <button onClick={handleClick} className="button-container">
      <p>{number}</p>
    </button>
  )
}
