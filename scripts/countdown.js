export default function Countdown({
  screenModal,
  minutes,
  seconds,
  countdownMinutes,
  countdownSeconds,
  initialSerie,
  finalSerie,
  inputSeries,
}) {
  let timerTimeOut;

  function updateDisplay(newMinutes, seconds) {
    countdownMinutes.textContent = String(newMinutes).padStart(2, "0");
    countdownSeconds.textContent = String(seconds).padStart(2, "0");
  }

  function resetTimer() {
    updateDisplay(minutes.textContent, seconds.textContent);
  }

  function timerCountdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(countdownMinutes.textContent);
      let seconds = Number(countdownSeconds.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;
      let finihedSerie =
        Number(initialSerie.textContent) === Number(finalSerie.textContent);

      if (finihedSerie) {
        screenModal.classList.add("open");
      }

      if (isFinished) {
        inputSeries.disabled = false;
        resetTimer();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      timerCountdown();
    }, 1000);
  }

  function hold() {
    clearInterval(timerTimeOut);
  }

  return {
    timerCountdown,
    hold,
  };
}
