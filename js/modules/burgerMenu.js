export const burgerHandler = () => {
  const burgerBtn = document.querySelector('.header__burger-button');
  const burgerCalllBtn = document.querySelector('.burger__call-button');
  const burgerOverlay = document.querySelector('.burger');
  const callBtn = document.querySelector('.header__call-button');
  const header = document.querySelector('.header');
  const burgerVisible = document.querySelector('.burger-visible');

  let opacity = 0;

  burgerVisible.style.cssText = `
    opacity: ${opacity};
    visibility: visible;
  `;



  const toggleMenu = () => {
    const visible = burgerOverlay.classList.toggle('burger-visible');

    if(visible){
      opacity += 0.03;
      burgerVisible
    }

    isBurgeMenuVisible();
  };

  const isBurgeMenuVisible = () => {

    const visible = burgerOverlay.classList.contains('burger-visible');
    burgerBtn.style.backgroundSize = `contain`;
    burgerBtn.style.backgroundRepeat = `no-repeat`;
    burgerBtn.style.backgroundPosition = `center`;

    burgerBtn.style.transition = `all .3s ease-in-out`;

    if (visible) {
      burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
    } else {
      burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
    }

  };

  burgerBtn.addEventListener('click', toggleMenu);

  const burgerMenuClick = ({target}) => {
    if (target === target.closest('.burger__link') ||
      target === burgerOverlay ||
      target === burgerCalllBtn) {
      burgerOverlay.classList.remove('burger-visible');
      isBurgeMenuVisible();
    }
  };

  const headerClick = ({target}) => {
    if (target !== target.closest('.header__burger-button')) {
      burgerOverlay.classList.remove('burger-visible');
      isBurgeMenuVisible();
    }
  };

  burgerOverlay.addEventListener('click', burgerMenuClick);
  header.addEventListener('click', headerClick);
};
