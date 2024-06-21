import React, { useEffect, useState } from 'react'

export default function CountdownTimer() {

  const [time, setTime] = useState(0);
  const [isClockActive, setIsClockActive] = useState(false);
  
  function handleCounterStart() {
    setIsClockActive(!isClockActive);
  }


  return (
    <div>
      <label htmlFor='time' className='px-2'>Enter time in seconds to count down from: </label>
      <input className="border border-blue-300 mx-2" name="time" type='number' value={time} onChange={(e)=>setTime(e.target.value)}/>
      <button className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded" onClick={handleCounterStart}> {isClockActive? "Stop" : "Start"} counting</button>

      {
        isClockActive ?
        <Clock time={time} />
        : null
      }


    </div>
  )
}

function Clock ({time}) {

  const [timeValue, setTimeValue] = useState(time);

  useEffect(()=>{
    const counterInterval = setInterval(() => {
      setTimeValue(t => t-1);
    }, 1000)

    return () => clearInterval(counterInterval)
  }, [])

  return <div className='px-2'>
    {timeValue}
  </div>
}