export default function Controls({
  countSeries,
  minutes,
  seconds,
}) {
  function addSeries() {
    let series = Number(countSeries.textContent);
    series++;
    countSeries.textContent = String(series).padStart(2, "0");
  }

  function removeSeries() {
    let series = Number(countSeries.textContent);
    series--;
    series > 0
      ? (countSeries.textContent = String(series).padStart(2, "0"))
      : null;
  }

  function addSeconds() {
    let secondsAdd = Number(seconds.textContent);
    let minutesAdd = Number(minutes.textContent);

    secondsAdd += 15;

    if (secondsAdd === 60) {
      secondsAdd = 0;
      minutesAdd++;
    }

    seconds.textContent = String(secondsAdd).padStart(2, "0");
    minutes.textContent = String(minutesAdd).padStart(2, "0");
  }

  function removeSeconds() {
    let secondsRemove = Number(seconds.textContent);
    let minutesRemove = Number(minutes.textContent);

    if (secondsRemove <= 0 && minutesRemove > 0) {
      secondsRemove += 60;
      minutesRemove--;
    }

    secondsRemove > 0 ? (secondsRemove -= 15) : null;

    seconds.textContent = String(secondsRemove).padStart(2, "0");
    minutes.textContent = String(minutesRemove).padStart(2, "0");
  }

  return {
    addSeries,
    removeSeries,
    addSeconds,
    removeSeconds,
  };
}
