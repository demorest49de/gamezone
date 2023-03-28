const modal = document.querySelector('.header__call-button');
const call = document.querySelector('.call');
const callOverlay = document.querySelector('.call-overlay');
const body = document.body;

callOverlay.style.display = 'block';

const toggleModalVisible = (isActive) => {
  body.style.overflow = isActive ? 'hidden' : 'visible';
};

modal.addEventListener("click", () => {
  const isActive = callOverlay.classList.toggle('is-visible');
  toggleModalVisible(isActive)
});

callOverlay.addEventListener('click', ({target}) => {
  if (!target.closest('.call')) {
    callOverlay.classList.remove('is-visible');
    toggleModalVisible(false);
  }
});