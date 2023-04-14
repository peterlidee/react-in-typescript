import { useEffect, useState } from "react"

export const useTimer = () => {
  const [ timer, setTimer ] = useState(0);
  const [ running, setRunning ] = useState(false);
  
  useEffect(() => {
    let intervalId: undefined | NodeJS.Timer;
    if(running){
      intervalId = setInterval(() => {
        setTimer(prev => prev + 1)
      }, 1000)
    }else{
      clearInterval(intervalId)
    }
    return () => clearInterval(intervalId)
  }, [ running ])
  
  const toggleTimer = () => {
    setRunning(prev => !prev)
  }
  const resetTimer = () => {
    setRunning(false)
    setTimer(0)
  }

  return { timer, running, toggleTimer, resetTimer }
}