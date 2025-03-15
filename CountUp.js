import { useStopwatch } from 'react-timer-hook';
import { render } from 'preact';


function MyStopwatch() {
  const {
    seconds,
    minutes,
    hours,
    days
  } = useStopwatch({ autoStart: true, interval:20 });

  return (
      <div><span>{days}</span>d <span>{hours}</span>h <span>{minutes}</span>m <span>{seconds}</span>s</div>
  );
}

const timer = document.getElementById('timer');
render(<MyStopwatch />, timer)