import { useEffect, useRef, useState } from 'react'

function MutableRef() {
  const [ timer, setTimer ] = useState(0)
  const intervalRef = useRef<null | number>(null)
  const stopTimer = () => {
    if(intervalRef.current) window.clearInterval(intervalRef.current)
  }
  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
    return () => stopTimer()
  }, [])
  return (
    <div>
      <strong>MutableRef</strong>
      <span>timer: {timer} </span>
      <button onClick={stopTimer}>stop timer</button>
    </div>
  )
}

export default MutableRef