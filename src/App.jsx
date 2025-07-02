import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const Hello = (props) => {

    if (props.username === undefined) {
      return <p>username</p>
    }
    return (
      <>
      <div className='danger'>
        <h1>Hello World {props.username}</h1>
      </div>
      </>
    )
  }

  function Goodbye() {
    return (
      <div>
        <h1>Goodbye World</h1>
      </div>
    )
  }

function App() {
  let city = "Bangkok"
  const onClickMe = () => {
    alert("Button clicked!")
  }
  return (
    <div>
      <Hello username={city}/>
      <Hello></Hello>
      <Goodbye />
      <button onClick={onClickMe}>Click me!!!</button>
    </div>
  )

}

export default App
