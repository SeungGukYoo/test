import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from "./About.jsx";
import {useRef} from "react";

function App() {
const ref = useRef('World')
  return (
    <>
      <h1>Hello {ref.current}</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <About />
    </>
  )
}

export default App
