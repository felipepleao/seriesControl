export default function Progress({
  progressGraphic,
  percentageProgress,
  countSeries,
  inputSeries,
  initialSerie,
  finalSerie,
  countdownMinutes,
  countdownSeconds,
  minutes,
  seconds,
}) {
  function seriesCount() {
    finalSerie.textContent = Number(countSeries.textContent);
  }

  function timerCount() {
    countdownMinutes.textContent = String(minutes.textContent).padStart(2, "0");
    countdownSeconds.textContent = String(seconds.textContent).padStart(2, "0");
  }

  function seriesProgress() {
    let serieCount = Number(initialSerie.textContent);
    let finalCount = Number(finalSerie.textContent);

    inputSeries.checked ? serieCount++ : null;
    serieCount <= finalCount ? (initialSerie.textContent = serieCount) : null;
    inputSeries.checked = false;
    inputSeries.disabled = true;
  }

  function progressCount() {
    let serieCount = Number(initialSerie.textContent);
    let finalCount = Number(finalSerie.textContent);

    let unitPercentage = 100 / finalCount;

    let percentageCount = (unitPercentage * serieCount).toFixed(0);
    percentageProgress.textContent = percentageCount;

    document.documentElement.style.setProperty(
      "--percentage",
      `${percentageCount}%`
    );
  }

  function resetControls() {
    countSeries.textContent = String(1).padStart(2, "0");
    seconds.textContent = String(0).padStart(2, "0");
    minutes.textContent = String(0).padStart(2, "0");
    initialSerie.textContent = String(0);
    inputSeries.disabled = false;
    percentageProgress.textContent = "0";
    document.documentElement.style.setProperty("--percentage", "0%");
  }

  return {
    seriesCount,
    timerCount,
    seriesProgress,
    progressCount,
    resetControls,
  };
}
