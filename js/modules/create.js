export const createHeader = () => {
  const header = document.createElement('header');
  header.classList.add('header');
  header.insertAdjacentHTML('beforeend', `
    <div class="container header__container">
      <button class="header__burger-button" tabindex="1">
        <svg class="header__button-icon" xmlns="http://www.w3.org/2000/svg">
          <use class="header__icon-menu" href="./img/header/menu.svg#menu"></use>
        </svg>
        <svg class="header__button-icon " xmlns="http://www.w3.org/2000/svg">
          <use class="header__icon-menu" href="./img/header/menu.svg#close"></use>
        </svg>
      </button>
      <a href="#" class="header__link"><img class="header__logo" src="img/header/logo.svg"
                                            alt=лого></a>
      <nav class="header__navigation">
        <ul class="header__menu">
          <li class="header__item"><a href="#rooms" class="header__link">залы</a></li>
          <li class="header__item"><a href="#about" class="header__link">о нас</a></li>
          <li class="header__item"><a href="#booking" class="header__link">бронь</a></li>
          <li class="header__item"><a href="#reviews" class="header__link">отзывы</a></li>
          <li class="header__item"><a href="#contacts" class="header__link">контакты</a></li>
        </ul>
      </nav>
      <button type="button" class="header__call-button" tabindex="2">заказать звонок</button>
    </div>
  `);
  return header;
};

export const createMain = () => {
  const main = document.createElement('main');
  main.classList.add('main');
  main.insertAdjacentHTML('beforeend', `

    <section class="hero">
      <h1 class="visually-hidden">GAME OVER - Новый формат игр и отдыха</h1>
      <div class="container hero__container">
        <p class="hero__title">GAME OVER</p>
        <h2 class="hero__text">Новый формат игр и отдыха</h2>
        <div class="hero__block">
          <div class="hero__underblock-number">
            <p class="hero__big-number">4</p>
            <p class="hero__text-block hero__text-block-padding">Тематических зала</p>
          </div>
          <div class="hero__underblock-text">
            <p class="hero__big-text">new</p>
            <p class="hero__text-block">Новейшая аппаратура</p>
          </div>
        </div>
        <a class="hero__button" href="#booking">забронировать</a>
        <a href="#preview" class="hero__link"></a>
      </div>
    </section>

    <section class="preview" id="preview">
      <div class="container preview__container">
        <h2 class="subtitle preview__subtitle">
          У нас есть все для классного отдыха с друзьями!
        </h2>
        <ul class="preview__list">
          <li class="preview__item">
            <figure class="preview__content">
              <img class="preview__image" src="img/preview/vr.jpg" alt="VR очки">
              <figcaption class="preview__text">VR очки</figcaption>
            </figure>
          </li>
          <li class="preview__item">
            <figure class="preview__content">
              <img
                class="preview__image"
                src="img/preview/audio.jpg"
                alt="Аудио-система 5.1 с отличным звуком"
              >
              <figcaption class="preview__text">
                Аудио-система 5.1 с&nbsp;отличным&nbsp;звуком
              </figcaption>
            </figure>
          </li>

          <li class="preview__item">
            <figure class="preview__content">
              <img
                class="preview__image"
                src="img/preview/micro.jpg"
                alt="Караоке (4 микрофона)"
              >
              <figcaption class="preview__text">
                Караоке (4 микрофона)
              </figcaption>
            </figure>
          </li>

          <li class="preview__item">
            <figure class="preview__content">
              <img class="preview__image" src="img/preview/game.jpg"
                   alt="Настольные игры"
              >
              <figcaption class="preview__text">Настольные игры</figcaption>
            </figure>
          </li>

          <li class="preview__item">
            <figure class="preview__content">
              <img
                class="preview__image"
                src="img/preview/netflix.jpg"
                alt="Кино сервисы Netflix, IVI, MegoGo, КиноПоиск, Okko"
              >
              <figcaption class="preview__text">
                Кино сервисы Netflix, IVI, MegoGo, КиноПоиск, Okko
              </figcaption>
            </figure>
          </li>

          <li class="preview__item">
            <figure class="preview__content">
              <img
                class="preview__image"
                src="img/preview/sony.jpg"
                alt="PlayStation 5"
              >
              <figcaption class="preview__text">PlayStation 5</figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </section>

    <section class="booking" id="booking">
      <div class="container booking__container">
        <h2 class="subtitle booking__subtitle">Забронировать зал просто</h2>

        <form class="booking__form" action="https://jsonplaceholder.typicode.com/posts" name="booking_form"
              method="post">

          <fieldset class="booking__room">
            <legend class="booking__legend">Выбери зал</legend>

            <input class="booking__input" type="radio" id="radio-vibes"
                   name="room-type" value="80's vibes" checked>
            <label class="booking__room-label" for="radio-vibes">
              80's vibes
            </label>

            <input class="booking__input" type="radio" id="radio-wars"
                   name="room-type" value="Star wars">
            <label class="booking__room-label" for="radio-wars">
              Star wars
            </label>

            <input class="booking__input" type="radio" id="radio-west"
                   name="room-type" value="Wild west">
            <label class="booking__room-label" for="radio-west">
              Wild west
            </label>

            <input class="booking__input" type="radio" id="radio-neon"
                   name="room-type" value="Neon style">
            <label class="booking__room-label" for="radio-neon">
              Neon style
            </label>
          </fieldset>

          <fieldset class="booking__game-set">
            <legend class="booking__legend">Собери наборы развлечений</legend>

            <div class="booking__above-set">

              <fieldset class="booking__subset">
                <legend class="booking__legend">Приставка:
                </legend>
                <label class="booking__set-label">
                  <input class="booking__input" type="radio"
                         name="console-type" value="Playstation" checked>
                  <span class="booking__icon booking__icon_radio">Playstation</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="radio"
                         name="console-type" value="Sega Mega Drive">
                  <span class="booking__icon booking__icon_radio">Sega Mega Drive</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="radio"
                         name="console-type" value="X-box One S">
                  <span class="booking__icon booking__icon_radio">X-box One S</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="radio"
                         name="console-type" value="Dendy">
                  <span class="booking__icon booking__icon_radio">Dendy</span>
                </label>
              </fieldset>

              <fieldset class="booking__subset">
                <legend class="booking__legend">
                  Настольные игры:
                </legend>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="board-type" value="Jenga">
                  <span class="booking__icon">Jenga</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="board-type" value="Monopoly">
                  <span class="booking__icon">Monopoly</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="board-type" value="Manchkin">
                  <span class="booking__icon">Манчкин</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="board-type" value="Alias">
                  <span class="booking__icon">Alias</span>
                </label>
              </fieldset>

              <fieldset class="booking__subset">
                <legend class="booking__legend">Дополнительно:
                </legend>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="additional-type" value="Karaoke">
                  <span class="booking__icon">Караоке</span>
                </label>
                <label class="booking__set-label">
                  <input class="booking__input" type="checkbox"
                         name="additional-type" value="VR">
                  <span class="booking__icon">VR</span>
                </label>
              </fieldset>
            </div>
          </fieldset>

          <fieldset class="booking__reg">
            <legend class="booking__legend">Выбери дату и время</legend>
            <div class="booking__above-block">
              <div class="booking__reg-block">

                <div class="booking__reg-subblock">
                  <div class="booking__reg-date-time">
                    <label class="booking__reg-label">
                      <input class="booking__reg-input" type="date" name="date" required>
                    </label>
                    <label class="booking__reg-label">
                      <input class="booking__reg-input" type="time" name="time" required>
                    </label>
                  </div>
                  <div class="booking__reg-people">
                    <label class="booking__reg-label">
                      <input class="booking__reg-input" type="number" min="1" max="15"
                             name="persons_amount"
                             placeholder="Сколько человек" required>
                    </label>
                  </div>
                </div>

                <div class="booking__reg-above-subset">
                  <div class="booking__reg-subset subset-name">
                    <label class="booking__reg-label booking__reg-name">
                      Имя
                      <input class="booking__reg-input" type="text" name="name" required>
                    </label>
                    <label class="booking__reg-label booking__reg-name">
                      Фамилия
                      <input class="booking__reg-input" type="text" name="sirname" required>
                    </label>
                  </div>

                  <div class="booking__reg-subset subset-comm">
                    <label class="booking__reg-label booking__reg-comm">
                      Телефон
                      <input class="booking__reg-input" type="tel" name="phone"
                             required>
                    </label>
                    <label class="booking__reg-label booking__reg-comm">
                      E-mail
                      <input class="booking__reg-input" type="email" name="email"
                             required>
                    </label>
                  </div>
                </div>

              </div>
              <div class="booking__submit-block">
                <button class="booking__submit-button" type="submit">Забронировать</button>
              </div>
            </div>
          </fieldset>

        </form>
      </div>
    </section>

    <section class="about" id="about">
        <h2 class="subtitle about__subtitle">О нас</h2>
        <div class="container about__container">
          <div class="about__image-block">
            <figure>
              <img class="about__img" src="img/about/about__prospect-image.jpg" alt="Виды развлечений">
            </figure>
          </div>
          <div class="about__content-block-promo">
            <div class="about__block-text">
              <p class="about__text">Для наших гостей мы создали концептуально новое игровое пространство виртуальной
                реальности в центральной части города.
              </p>
              <p class="about__text">Каждый день мы стараемся создавать для вас самую лучшую игровую атмосферу и
                радовать Вас топовыми игровыми разработками со всего мира.
              </p>
            </div>
          </div>
          <blockquote class="about__blockquote">
            <p class="about__quotes">
              <span class="about__big-text">game over &mdash; это место незабываемых впечатлений
              </span>
            </p>
            <div class="about__figure-boss">
              <div class="about__boss-description">
                <p class="about__text-boss">Аркадий Абакшин,&nbsp;
                  создатель игровой&nbsp;
                  территории GAME OVER
                </p>
              </div>
            </div>
          </blockquote>
        </div>
    </section>

    <section class="faq" id="faq">
      <div class="container faq__container">
        <h2 class="subtitle faq__subtitle">
          Частые вопросы
        </h2>

        <ul class="faq__list">
          <li class="faq__item">
            <button class="faq__button">Можно ли забронировать комнату онлайн?</button>
            <div class="faq__item-wrapper">
              <p class="faq__text">Да, забронировать комнату вы можете онлайн,
                заполнив форму на нашем сайте. Также вы можете забронировать
                комнату позвонив по телефону <span class="faq__text_bold">8 (999) 958 - 48 - 38</span>
              </p>
            </div>
          </li>
          <li class="faq__item">
            <button class="faq__button">
              Могут ли мне вернуть деньги за бронь?
            </button>
            <div class="faq__item-wrapper">
              <p class="faq__text">Да, забронировать комнату вы можете онлайн,
                заполнив форму на нашем сайте. Также вы можете забронировать
                комнату позвонив по телефону <span class="faq__text_bold">8 (999) 958 - 48 - 38</span>
              </p>
            </div>
          </li>
          <li class="faq__item">
            <button class="faq__button">
              Какая комната самая популярная?
            </button>
            <div class="faq__item-wrapper">
              <p class="faq__text">Да, забронировать комнату вы можете онлайн,
                заполнив форму на нашем сайте. Также вы можете забронировать
                комнату позвонив по телефону <span class="faq__text_bold">8 (999) 958 - 48 - 38</span>
              </p>
            </div>
          </li>
          <li class="faq__item">
            <button class="faq__button">
              Как получить VIP карту?
            </button>
            <div class="faq__item-wrapper">
              <p class="faq__text">Да, забронировать комнату вы можете онлайн,
                заполнив форму на нашем сайте. Также вы можете забронировать
                комнату позвонив по телефону <span class="faq__text_bold">8 (999) 958 - 48 - 38</span>
              </p>
            </div>
          </li>
          <li class="faq__item">
            <button class="faq__button">
              Какая комната самая популярная?
            </button>
            <div class="faq__item-wrapper">
              <p class="faq__text">Да, забронировать комнату вы можете онлайн,
                заполнив форму на нашем сайте. Также вы можете забронировать
                комнату позвонив по телефону <span class="faq__text_bold">8 (999) 958 - 48 - 38</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  `);
  return main;
};

export const createFooter = () => {
  const footer = document.createElement('footer');
  footer.classList.add('contacts');
  footer.id = 'contacts';
  footer.insertAdjacentHTML('beforeend', `
    <div class="container contacts__container">
      <h2 class="subtitle contacts__subtitle">Контакты</h2>

      <div class="contacts__block">

        <div class="contacts__block-info">
          <address class="contacts__info">

            <div class="contacts__location">
              <p class="contacts__text ">г. Москва</p>
              <p class="contacts__text ">ул. Аквамарина, 16</p>
            </div>
            <a class="contacts__text contacts__phone contacts-effects" href="tel:+79509302893">8(950)930-28-93</a>
            <a class="contacts__text contacts__email contacts-effects"
               href="mailto:GameOver@gmail.com">GameOver@gmail.com</a>
          </address>
          <nav class="contacts__navigation">
            <ul class="contacts__list">
              <li class="contacts__item"><a class="contacts__link" href="https://vk.com" target="_blank">
                <svg width="50" height="50" viewbox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M24.9999 1C11.7449 1 0.999878 11.745 0.999878 25C0.999878 38.255 11.7449 49
24.9999 49C38.2549 49 48.9999 38.255 48.9999 25C48.9999 11.745 38.2549 1 24.9999 1ZM34.2299
28.0775C34.2299 28.0775 36.3524 30.1725 36.8749 31.145C36.8899 31.165 36.8974 31.185 36.9024
31.195C37.1149 31.5525 37.1649 31.83 37.0599 32.0375C36.8849 32.3825 36.2849 32.5525 36.0799
32.5675H32.3299C32.0699 32.5675 31.5249 32.5 30.8649 32.045C30.3574 31.69 29.8574 31.1075 29.3699
30.54C28.6424 29.695 28.0124 28.965 27.3774 28.965C27.2967 28.9649 27.2166 28.9775 27.1399 29.0025C26.6599
29.1575 26.0449 29.8425 26.0449 31.6675C26.0449 32.2375 25.5949 32.565 25.2774 32.565H23.5599C22.9749 32.565
19.9274 32.36 17.2274 29.5125C13.9224 26.025 10.9474 19.03 10.9224 18.965C10.7349 18.5125 11.1224 18.27 11.5449
18.27H15.3324C15.8374 18.27 16.0024 18.5775 16.1174 18.85C16.2524 19.1675 16.7474 20.43 17.5599 21.85C18.8774 24.165
19.6849 25.105 20.3324 25.105C20.4538 25.1036 20.573 25.0727 20.6799 25.015C21.5249 24.545 21.3674 21.5325 21.3299
20.9075C21.3299 20.79 21.3274 19.56 20.8949 18.97C20.5849 18.5425 20.0574 18.38 19.7374 18.32C19.8669 18.1413 20.0375
17.9964 20.2349 17.8975C20.8149 17.6075 21.8599 17.565 22.8974 17.565H23.4749C24.5999 17.58 24.8899 17.6525 25.2974
17.755C26.1224 17.9525 26.1399 18.485 26.0674 20.3075C26.0449 20.825 26.0224 21.41 26.0224 22.1C26.0224 22.25 26.0149
22.41 26.0149 22.58C25.9899 23.5075 25.9599 24.56 26.6149 24.9925C26.7003 25.0461 26.799 25.0746 26.8999
25.075C27.1274 25.075 27.8124 25.075 29.6674 21.8925C30.2395
20.8681 30.7366 19.8037 31.1549 18.7075C31.1924 18.6425 31.3024 18.4425
31.4324 18.365C31.5283 18.3161 31.6347 18.2912 31.7424 18.2925H36.1949C36.6799 18.2925 37.0124 18.365 37.0749
18.5525C37.1849 18.85 37.0549 19.7575 35.0224 22.51L34.1149 23.7075C32.2724 26.1225 32.2724 26.245 34.2299 28.0775Z"
                  />
                </svg>
              </a></li>
              <li class="contacts__item"><a class="contacts__link" href="https://www.telegram.org"
                                            target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M47.9999 24C47.9999 30.3652 45.4713 36.4697
                     40.9704 40.9706C36.4696 45.4714 30.3651 48 23.9999
                     48C17.6347 48 11.5302 45.4714 7.02932 40.9706C2.52844
                     36.4697 -0.00012207 30.3652 -0.00012207 24C-0.00012207
                     17.6348 2.52844 11.5303 7.02932 7.02944C11.5302 2.52856
                     17.6347 0 23.9999 0C30.3651 0 36.4696 2.52856 40.9704
                     7.02944C45.4713 11.5303 47.9999 17.6348 47.9999 24ZM24.8609
                     17.718C22.5269 18.69 17.8589 20.7 10.8629 23.748C9.72888 24.198
                     9.13188 24.642 9.07788 25.074C8.98788 25.803 9.90288 26.091
                     11.1479 26.484L11.6729 26.649C12.8969 27.048 14.5469 27.513
                     15.4019 27.531C16.1819 27.549 17.0489 27.231 18.0059
                     26.571C24.5429 22.158 27.9179 19.929 28.1279 19.881C28.2779
                     19.845 28.4879 19.803 28.6259 19.929C28.7669 20.052 28.7519
                     20.289 28.7369 20.352C28.6469 20.739 25.0559 24.075 23.1989
                     25.803C22.6199 26.343 22.2089 26.724 22.1249 26.811C21.9399
                     27 21.7519 27.1861 21.5609 27.369C20.4209 28.467 19.5689 29.289
                     21.6059 30.633C22.5869 31.281 23.3729 31.812 24.1559
                     32.346C25.0079 32.928 25.8599 33.507 26.9639
                     34.233C27.2429 34.413 27.5129 34.608 27.7739
                     34.794C28.7669 35.502 29.6639 36.138 30.7649
                     36.036C31.4069 35.976 32.0699 35.376 32.4059 33.576C33.2009 29.325
                     34.7639 20.118 35.1239 16.323C35.1458 16.0075 35.1328 15.6906 35.0849
                     15.378C35.0566 15.1258 34.9346 14.8934 34.7429 14.727C34.4699 14.5386
                     34.1445 14.4409 33.8129 14.448C32.9129 14.463 31.5239 14.946 24.8609 17.718Z"
                  />
                </svg>
              </a></li>
              <li class="contacts__item"><a class="contacts__link" href="https://www.pinterest.com"
                                            target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M25.0005 0C11.1947 0 -0.000152588 11.1936 -0.000152588 25.0006C-0.000152588 35.2378 6.15562 44.0314 14.9646 47.8981C14.8941 46.1526 14.9511 44.0558 15.3998 42.159C15.8806 40.1282 18.6165 28.5359 18.6165 28.5359C18.6165 28.5359 17.8178 26.9397 17.8178 24.5808C17.8178 20.8763 19.9652 18.1077 22.6383 18.1077C24.912 18.1077 26.0107 19.8154 26.0107 21.8609C26.0107 24.1468 24.5537 27.5635 23.8037 30.7327C23.1768 33.3859 25.1338 35.5481 27.7498 35.5481C32.4864 35.5481 35.6761 29.4647 35.6761 22.2558C35.6761 16.7782 31.9864 12.6769 25.2742 12.6769C17.6902 12.6769 12.9659 18.3321 12.9659 24.6487C12.9659 26.8282 13.6082 28.3635 14.6146 29.5513C15.0768 30.0981 15.1409 30.318 14.9736 30.9462C14.8537 31.4058 14.5781 32.5128 14.4646 32.9519C14.2986 33.5853 13.7857 33.8109 13.2127 33.5776C9.71972 32.1513 8.0928 28.3263 8.0928 24.0263C8.0928 16.9237 14.0819 8.40898 25.9601 8.40898C35.5056 8.40898 41.7877 15.316 41.7877 22.7321C41.7877 32.5378 36.3351 39.8647 28.2979 39.8647C25.5998 39.8647 23.0607 38.4051 22.1909 36.7487C22.1909 36.7487 20.7396 42.5077 20.4325 43.6218C19.9024 45.5494 18.8646 47.4763 17.9159 48.9769C20.2162 49.6571 22.6024 50.0025 25.0011 50.0026C38.8063 50.0013 49.9998 38.8071 49.9998 25.0006C49.9998 11.1936 38.8063 0 25.0005 0V0Z"
                  />
                </svg>

              </a></li>
              <li class="contacts__item"><a class="contacts__link"
                                            href="https://www.stumbleupon.org"
                                            target="_blank">
                <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M44.7441 9.66919C48.1583 14.0494 50.0085 19.4463 49.9999 24.9999C49.9999 38.8051 38.805 49.9999 25.0006 49.9999C15.2871 49.9999 6.86597 44.4576 2.72751 36.3647H13.6237C18.816 36.3647 22.4429 33.566 22.4429 29.0923C22.4429 19.6108 11.5051 23.4737 11.5051 20.1089C11.5051 18.4878 12.8057 17.898 15.1858 17.898H22.7692C24.8711 17.898 27.3435 18.275 27.3435 20.5685V28.1243C27.3435 33.5955 31.6159 36.364 36.0441 36.364C40.548 36.364 44.7435 33.5955 44.7435 28.1243V9.66919H44.7441Z"/>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M25.0005 2.43241e-05C30.0173 -0.00698868 34.919 1.50262 39.0626 4.33079V28.3013C39.0626 29.9628 37.7037 31.3224 36.0447 31.3224C34.3838 31.3224 33.0261 29.9628 33.0261 28.3013V21.1186C33.0261 15.3846 30.1242 12.9994 26.3447 12.9994H14.0441C9.59088 12.9994 5.89665 15.834 5.89665 20.3289C5.89665 22.6289 6.8819 25.9994 11.5415 26.8353C15.337 27.5186 16.8351 27.3199 16.8351 29.3506C16.8351 31.3224 14.6261 31.3224 11.7101 31.3224H0.808189C0.269676 29.2582 -0.0019826 27.1334 -0.000143311 25C-0.000143311 11.1981 11.196 2.43241e-05 25.0005 2.43241e-05Z"/>
                </svg>
              </a></li>
            </ul>
          </nav>
        </div>
        <div class="contacts__block-map">
          <img class="contacts__map" src="img/contacts/map.png" alt="Карта">
        </div>
      </div>

      <div class="contacts__copyright">
        <p class="contacts__text-small">
          © Game Over, 2022</p>
        <div class="contacts__block-text">
          <p class="contacts__text-small">Design by Andrey Shevchenko</p>
          <p class="contacts__text-small"><a class="contacts__link-small" href="mailto:GameOver@gmail.com">demorest49de@gmail.com</a>
          </p>
        </div>
      </div>

    </div>
  `);
  return footer;
};

export const createBurgerMenu = () => {
  const burger = document.createElement('div');
  burger.classList.add('burger');
  burger.insertAdjacentHTML('beforeend', `
      <div class="burger__container">
        <nav class="burger__nav">
          <ul class="burger__list">
            <li class="burger__item">
              <a class="burger__link" href="#rooms" tabindex="3">Залы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#about" tabindex="4">О нас</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#booking" tabindex="5">Бронь</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#reviews" tabindex="6">Отзывы</a>
            </li>
            <li class="burger__item">
              <a class="burger__link" href="#contacts" tabindex="7">Контакты</a>
            </li>
          </ul>
        </nav>
        <button class="burger__call-button" tabindex="8">Заказать звонок</button>
      </div>
  `);
  return burger;
};

export const createCallModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('call-overlay');
  modal.insertAdjacentHTML('beforeend', `
      <div class="call">
        <div class="call__container">
          <h2 class="call__title">заказать звонок</h2>
          <form class="call__form" name="call__form" id="call__form" method="post">
            <fieldset class="call_fieldset">
            <div class="call__subblock">
              <label class="call__label">имя</label>
              <input class="call__input call__input-name" name="call__name" id="call__name" required type="text">
            </div>
            <div class="call__subblock">
              <label class="call__label">телефон</label>
              <input class="call__input call__input-phone" name="call__phone" id="call__phone" required type="tel">
            </div>
            <button class="call__submit" type="submit" form="call__form">позвонить мне</button>
            </fieldset>
          </form>
          <button type="button" class="call__close-btn"></button>
        </div>
      </div>
  `);
  return modal;
};


// <section className="reviews" id="reviews">
//   <div className="container reviews__container">
//     <h2 className="subtitle reviews__subtitle">
//       Отзывы посетителей
//     </h2>
//
//     <div className="reviews__block-container">
//       <ul className="reviews__list">
//         <li className="reviews__item">
//           <figure className="reviews__figure">
//             <div className="reviews__block-img">
//               <img className="reviews__img" src="img/reviews/person_1.png" width="150" alt="Имя">
//             </div>
//             <figcaption className="reviews__text-size">Макс Самойлов
//             </figcaption>
//           </figure>
//           <p className="reviews__text reviews__text-size">
//             Отмечали здесь день рождения с компанией друзей, все было очень круто! VR очки это просто бомба,
//             никогда еще я не был в таком полном игровом погружении. Сервис на высоте!
//           </p>
//         </li>
//         <li className="reviews__item">
//           <figure className="reviews__figure">
//             <div className="reviews__block-img">
//               <img className="reviews__img" src="img/reviews/person_2.png" width="150" alt="Имя">
//             </div>
//             <figcaption className="reviews__text-size">Оксана Григорьева</figcaption>
//           </figure>
//           <p className="reviews__text reviews__text-size">
//             Были в комнате Дикий Запад, пели в караоке под Шакиру, отличный получился корпоратив! У нас в городе
//             больше нет подобных заведений
//           </p>
//         </li>
//         <li className="reviews__item">
//           <figure className="reviews__figure">
//             <div className="reviews__block-img">
//               <img className="reviews__img" src="img/reviews/person_3.png" width="150" alt="Имя">
//             </div>
//             <figcaption className="reviews__text-size">Никита Ященко</figcaption>
//           </figure>
//           <p className="reviews__text reviews__text-size">
//             Немного подвисала игра в VR очках, а так все норм. Крутое оформление комнаты в стиле звездных войн,
//             попал в атмосферу космоса
//           </p>
//         </li>
//       </ul>
//     </div>
//   </div>
// </section>
