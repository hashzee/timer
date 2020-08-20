import React, { useState, useEffect } from 'react';
import UIfx from 'uifx';
import './App.css';

import TimerHand from './Components/TimerHand/TimerHand';
import Bottom from './Components/Bottom/Bottom';
import TimerDigitsDisplay from './Components/TimerDigitsDisplay/TimerDigitsDisplay';

const tickMp3 = require("./Sounds/tick.mp3");
const alarmMp3 = require("./Sounds/alarm.mp3");

function App() {
  const tickSound = new UIfx(tickMp3);
  const alarmSound = new UIfx(alarmMp3);
  const [isOn, setIsOn] = useState(false);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (isOn) {
      var theInterval = setInterval(() => runTimer(), 1000);
      return function cleanup() {
        clearInterval(theInterval);
      };       
    }
  }, [seconds, isOn])

  const runTimer = () => {

    if (seconds > 0) {
      tickSound.play();
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      alarmSound.play();
      resetTimer();
    }
  }

  const startTimer = () => {
    if (isOn === true) {
      return;
    }

    setIsOn(true);
    tickSound.play();
  }

  const stopTimer = () => {
    setIsOn(false);
  }

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  }


  const handleAbout = () => {
    alert(`Timer App, made by Zeeshan Hashmi.\n\nUsing React, Typescript, Test Driven Development.\n\nIts a Progressive Web App as well, means you can simply install it and then run from your device without browser.`);
  }

  const handleSecondChange = (event: React.FormEvent<HTMLSelectElement>) => {
    if (!isOn) {
      setSeconds(parseInt(event.currentTarget.value));
      event.currentTarget.value = '0';
    }
  }


  const options = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60];

  return (

    <div className="App">
      <h1>Timer App</h1>
      <div className='Timer'>
        <div className='invStartButton' onClick={() => startTimer()} />
        <div className='invStopButton' onClick={() => stopTimer()} />
        <div className='invResetButton' onClick={() => resetTimer()} />
        <TimerHand seconds={seconds} />
      </div>

        <TimerDigitsDisplay />


      <div className='buttonContainer'>
        <select onChange={e => { handleSecondChange(e) }}>
         <option value={0}>- Seconds -</option>
          {options.map((opt: number, index: number) => (<option key={index} value={opt}>{opt} Seconds</option>))}
        </select>
      </div>

      <Bottom hStart={() => startTimer()} hStop={() => stopTimer()} hReset={() => resetTimer()} hAbout={()=>handleAbout()} />
    </div>
  );
}

export default App;
