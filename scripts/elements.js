const screenConfig = document.querySelector(".screen.configuration");
const screenProgress = document.querySelector(".screen.progress");
const screenModal = document.querySelector(".modal-sucess");
const closeModal = document.querySelector(".card-modal-close");

// screen config
const countSeries = document.querySelector(".series-count");
const buttonAddSeries = document.querySelector(".btnSeries-add");
const buttonRemoveSeries = document.querySelector(".btnSeries-remove");

const minutes = document.querySelector(".timer-minutes");
const seconds = document.querySelector(".timer-seconds");
const buttonAddTimer = document.querySelector(".btnTimer-add");
const buttonRemoveTimer = document.querySelector(".btnTimer-remove");

const btnStart = document.querySelector(".button.start");
const btnReset = document.querySelector(".button.reset");

// screen progress
const countdownMinutes = document.querySelector(".countdown-minutes");
const countdownSeconds = document.querySelector(".countdown-seconds");

const progressGraphic = document.querySelector(".progress-chart");
const percentageProgress =
  document.querySelector(".progress-number");
const inputSeries = document.querySelector(".input-series");
const initialSerie = document.querySelector(".input-series-initial");
const finalSerie = document.querySelector(".input-series-final");

export const elements = {
  screenConfig,
  screenProgress,
  screenModal,
  closeModal,
  countSeries,
  buttonAddSeries,
  buttonRemoveSeries,
  minutes,
  seconds,
  buttonAddTimer,
  buttonRemoveTimer,
  btnStart,
  countdownMinutes,
  countdownSeconds,
  progressGraphic,
  percentageProgress,
  inputSeries,
  initialSerie,
  finalSerie,
  btnReset,
};
