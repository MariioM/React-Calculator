/* eslint-disable react/prop-types */
import '../components_styles/Screen.css'

export function Screen({ result }) {
  return (
    <>
      <input className="screen" value={result} disabled />
      <hr />
    </>
  )
}
