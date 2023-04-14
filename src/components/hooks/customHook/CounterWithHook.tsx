import { useTimer } from './useTimer';

function Counter() {
  const { timer, running, toggleTimer, resetTimer } = useTimer();

  return (
    <div>
      timer: {timer}
      <button onClick={toggleTimer}>{running ? 'stop' : 'start'}</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  )
}

export default Counter