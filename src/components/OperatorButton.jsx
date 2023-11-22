/* eslint-disable react/prop-types */
import '../components_styles/OperatorButton.css'

export function OperatorButton({ sign, updateScreen }) {
  const handleClick = () => {
    updateScreen(sign)
  }

  return (
    <button onClick={handleClick} className="operator-button-container">
      <p>{sign}</p>
    </button>
  )
}
