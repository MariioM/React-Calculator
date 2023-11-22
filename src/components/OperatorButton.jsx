/* eslint-disable react/prop-types */
import '../components_styles/OperatorButton.css'

export function OperatorButton({
  sign,
  updateScreen,
  calculateResult,
  clearScreen,
  deleteChar,
}) {
  const handleClick = () => {
    switch (sign) {
      case '=':
        calculateResult()
        break
      case 'AC':
        clearScreen()
        break
      case 'C':
        deleteChar()
        break
      default:
        updateScreen(sign)
        break
    }
  }

  return (
    <button onClick={handleClick} className="operator-button-container">
      <p>{sign}</p>
    </button>
  )
}
