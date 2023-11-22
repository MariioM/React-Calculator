/* eslint-disable react/prop-types */
import '../components_styles/Screen.css'

export function Screen({ result }) {
  return (
    <>
      <div className="screen">
        <p>{result}</p>
      </div>
      <hr />
    </>
  )
}
