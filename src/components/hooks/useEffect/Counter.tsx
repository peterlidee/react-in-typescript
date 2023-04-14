import { useEffect, useState } from 'react'

function Counter() {
  const [ timer, setTimer ] = useState(0)
  const [ running, setRunning ] = useState(false)

  useEffect(() => {
    let intervalId: NodeJS.Timer | undefined;
    if(running){
      intervalId = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)
    }else{
      if(intervalId) clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [ running ])

  const toggleTimer = () => {
    setRunning(prevRunning => !prevRunning)
  }
  const resetTimer = () => {
    setTimer(0)
    setRunning(false)
  }
  
  return (
    <div>
      <span>timer: {timer}</span>
      <button onClick={toggleTimer}>{ running ? 'stop' : 'start' }</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Counter