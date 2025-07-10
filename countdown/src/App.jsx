import React, { useEffect,useState } from 'react'
import './App.css'
import Display from './Display'

const App=()=> {
  const endTime = new Date('July 10, 2026 15:05:00 ').getTime();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

    const [hasAlerted, setHasAlerted] = useState(false); // track if countdown ended

  const gap = endTime - currentTime; //177670892

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

   const remainingDays = gap > 0 ? Math.floor(gap / days) : 0;
  const remainingHours = gap > 0 ? Math.floor((gap % days) / hours) : 0;
  const remainingMinutes = gap > 0 ? Math.floor((gap % hours) / minutes) : 0;
  const remainingSeconds = gap > 0 ? Math.floor((gap % minutes) / seconds) : 0;

   useEffect(() => {
    if (gap <= 0) {
      if (!hasAlerted) {
        alert('The Offer Ended');
        setHasAlerted(true);
      }
      return; // stop timer updates after countdown ends
    }
    
    const timer = setTimeout(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => clearTimeout(timer); // clear timeout to avoid leaks
  }, [currentTime, gap, hasAlerted]);
  return (
    <>
      <div>
        <center>
          <Display days={remainingDays}
          hours={remainingHours} minutes={remainingMinutes}
          seconds={remainingSeconds}/>
        </center>
        
      </div>
      
    </>
  )
}

export default App