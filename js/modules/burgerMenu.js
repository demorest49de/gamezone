const initBurgerMenuVars = () => {
  let visibility = false;
  let startTime = NaN;
  const durationOpacity = 500;
  return {
    visibility, startTime, durationOpacity
  };
};

let {visibility, startTime, durationOpacity} = initBurgerMenuVars();

const burgeMenuIconHandler = ($) => {
  $.burgerBtn.style.backgroundSize = `contain`;
  $.burgerBtn.style.backgroundRepeat = `no-repeat`;
  $.burgerBtn.style.backgroundPosition = `center`;

  $.burgerBtn.style.transition = `all .3s ease-in-out`;

  if (visibility) {
    $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
    $.burgerBtn.classList.add('header__burger-close-btn');
  } else {
    $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
    $.burgerBtn.classList.remove('header__burger-close-btn');
  }
};

const changeVisibility = ($, isVisibilityOff = null) => {
  if (isVisibilityOff) {
    visibility = false;
    return;
  }
  visibility = !visibility;
};

const toggleMenuHandler = ($, isVisibilityOff = null) => {
  if (isVisibilityOff && !visibility) return;
  changeVisibility($, isVisibilityOff);
  let id = 0;

  const toggleHandler = (timestamp) => {
    startTime ||= timestamp;
        const progress = +((timestamp - startTime) / durationOpacity).toFixed(2);
    console.log(' progress before if condition enter: ',progress);
    if (visibility && progress <= 1) {
      // console.log(' timestamp: ', timestamp);
      console.log(' progress: ', progress);
      $.burgerOverlay.style.opacity = progress;
      id = requestAnimationFrame(toggleHandler);
    }

    if (!visibility && progress >= 0) {
      // console.log(' timestamp: ', timestamp);
      console.log('1 - progress: ', 1 - progress);
      $.burgerOverlay.style.opacity = 1 - progress;
      id = requestAnimationFrame(toggleHandler);
    }

    if (progress > 1 || progress < 0) {
      startTime = NaN;
      cancelAnimationFrame(id);
      console.log(' NaN startTime: ', startTime);
    }
  };

  if (!visibility) {
    setTimeout(() => {
      $.burgerOverlay.style.display = 'none';
    }, durationOpacity);
  } else {
      $.burgerOverlay.style.display = 'block';
  }

  requestAnimationFrame(toggleHandler);
  burgeMenuIconHandler($);
};

export const burgerMenuClickHandler = ($) => {
  const burgerBtnClickHandler = ($) => {
    $.burgerBtn.addEventListener("click", () => {
      toggleMenuHandler($);
    });
  };

  const burgerMenuOutsideClickHandler = ($) => {
    $.burgerOverlay.addEventListener('click', ({target}) => {
      if (target === target.closest('.burger__link') || target === $.burgerOverlay || target === $.burgerCalllBtn) {
        toggleMenuHandler($, true);
      }
    });
  };

  const headerClickHandler = ($) => {
    $.header.addEventListener('click', ({target}) => {
      if (target !== target.closest('.header__burger-button')) {
        toggleMenuHandler($, true);
      }
    });
  };
  burgerBtnClickHandler($);
  burgerMenuOutsideClickHandler($);
  headerClickHandler($);
};


export const mouseHoverActiveFocusHandler = ($) => {
//hover
  const mouseOutOverHandler = ($) => {
    $.burgerBtn.addEventListener("mouseover", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-hover.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-hover.svg)`;
      }
    });

    $.burgerBtn.addEventListener("mouseout", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu.svg)`;
      }
    });
  };

  //active
  const mouseUpDownHandler = ($) => {

    $.burgerBtn.addEventListener("mouseup", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });

    $.burgerBtn.addEventListener("mousedown", ({target}) => {

      if (target.closest('.header__burger-close-btn')) {
        $.burgerBtn.style.backgroundImage = `url(../img/header/close-active.svg)`;
      } else {
        $.burgerBtn.style.backgroundImage = `url(../img/header/menu-active.svg)`;
      }
    });
  };

  //focus
  const mouseFocusHandler = ($) => {
    $.burgerBtn.addEventListener("focus", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        target.style.backgroundImage = `url(../img/header/close-focus.svg)`;
      } else {
        target.style.backgroundImage = `url(../img/header/menu-focus.svg)`;
      }
    });
  };

  //focus
  const mouseBlurHandler = ($) => {
    $.burgerBtn.addEventListener("blur", ({target}) => {
      if (target.closest('.header__burger-close-btn')) {
        target.style.backgroundImage = `url(../img/header/close.svg)`;
      } else {
        target.style.backgroundImage = `url(../img/header/menu.svg)`;
      }
    });
  };

  mouseOutOverHandler($);
  mouseUpDownHandler($);
  mouseFocusHandler($);
  mouseBlurHandler($);
};
