import { elements } from "./elements.js";
import Controls from "./controls.js";
import Progress from "./progress.js";
import Countdown from "./countdown.js";
import Modal from "./modal.js";

const {
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
} = elements;

const controls = Controls({
  countSeries,
  minutes,
  seconds,
});

const progress = Progress({
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
});

const countdown = Countdown({
  screenModal,
  minutes,
  seconds,
  countdownMinutes,
  countdownSeconds,
  initialSerie,
  finalSerie,
  inputSeries,
});

const modal = Modal({
  screenConfig,
  screenProgress,
  screenModal,
});

// Tela de configuração

buttonAddSeries.addEventListener("click", () => {
  controls.addSeries();
});

buttonRemoveSeries.addEventListener("click", () => {
  controls.removeSeries();
});

buttonAddTimer.addEventListener("click", () => {
  controls.addSeconds();
});

buttonRemoveTimer.addEventListener("click", () => {
  controls.removeSeconds();
});

btnStart.addEventListener("click", () => {
  screenConfig.classList.toggle("hidden");
  screenProgress.classList.toggle("hidden");

  progress.seriesCount();
  progress.timerCount();
});

// Tela de progresso

inputSeries.addEventListener("click", () => {
  progress.seriesProgress();
  progress.progressCount();
  countdown.timerCountdown();
});

btnReset.addEventListener("click", () => {
  progress.resetControls();
  countdown.hold();
  screenConfig.classList.toggle("hidden");
  screenProgress.classList.toggle("hidden");
});

closeModal.addEventListener("click", () => {
  progress.resetControls();
  countdown.hold();
  modal.hideModal();
});

screenModal.addEventListener("click", () => {
  progress.resetControls();
  countdown.hold();
  modal.closeOutOfModal();
});
