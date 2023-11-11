export default function Modal({ screenConfig, screenProgress, screenModal }) {
  function hideModal() {
    screenConfig.classList.remove("hidden");
    screenProgress.classList.add("hidden");

    screenModal.classList.remove("open");
  }

  function closeOutOfModal() {
    hideModal();
  }

  return {
    hideModal,
    closeOutOfModal,
  };
}
