import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //useState hook
  let [counter, setCounter] = useState(0);

  //increasing counter function
  const IncValue = () => {
    if (counter < 20) setCounter(counter + 1);

  }

  //decreasing counter function
  const decValue = () => {
    if (counter > 0) setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>

      <button
        onClick={IncValue}
      >Increase Value</button>
      <br /><br />
      <button
        onClick={decValue}
      >Decrease Value</button>
    </>
  )
};

export default App
