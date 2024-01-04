import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    //targetTime is in seconds, setTimeout requires the time in ms
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal(); //this is a built-in method in the dialog element
    }, targetTime * 1000);
    //this code bellow will execute right after the timer was set
    //only the function inside setTimeout wont execute now, only when the timer finishes
    setTimerStarted(true);
  }

  function handleStop() {
    //this is a js function that stops a timer, it just needs a pointer for that timer
    //this pointer is returned by setTimeout
    clearTimeout(timer.current);
  }

  return (
    <>
      {/*the ResultModal is always present because by default its invisible, we need to force it by using, for example,
    the .showModal() method. If it wasn't always rendered we couldnt also use the ref for it here */}
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
