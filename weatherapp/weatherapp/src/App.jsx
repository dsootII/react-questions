import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherDisplay from './WeatherDisplay';

function App() {

  const today = new Date();
  

  return (
    <>
      <div>Get the weather details for {today.toUTCString().slice(0,16)}</div>
      <WeatherDisplay />
    </>
  )
}

export default App
