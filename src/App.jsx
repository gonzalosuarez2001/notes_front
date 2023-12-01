import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const helloWorld = async () => {
    try {
      const res = await fetch("https://closed-sunrise-hotel.glitch.me/");

      if (!res.ok) {
        throw new Error(`La petición falló con estado: ${res.status}`);
      }

      const data = await res.json();
      console.log(data);
      console.log("bien");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };


  useEffect(()=> {
    helloWorld()
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
