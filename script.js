document.addEventListener("DOMContentLoaded", () => {

  // GAMBURGER
  function gabmurgerFunc(gamburderSelector, navigationSelector) {

    const gamburger = document.querySelector(gamburderSelector);
    const navigation = document.querySelector(navigationSelector);

    let menuOpen = false;
    gamburger.addEventListener('click', () => {
      if (!menuOpen) {
        gamburger.classList.add('open');
        menuOpen = true;
        navigation.classList.add('open');
      } else {
        gamburger.classList.remove('open');
        menuOpen = false;
        navigation.classList.remove('open');
      }
    });
  }
  gabmurgerFunc(".gamburger", ".header__nav");

  // bgChanging
  function bgChanging(bgSectionSelector) {

    const bgSection = document.querySelector(bgSectionSelector);

    const fisrtFon = 'url(css/img/Home/fon2.png)';
    const secondFon = "url(css/img/Home/fon3.png)";
    const thirdFon = 'url(css/img/Home/fon1.png)';

    setTimeout(() => {
      bgSection.style.setProperty('background-image', fisrtFon);
    }, 5000);

    setTimeout(() => {
      bgSection.style.setProperty('background-image', secondFon);
    }, 10000);

    setTimeout(() => {
      bgSection.style.setProperty('background-image', thirdFon);
      return bgChanging('.home');
    }, 15000);
  }
  bgChanging('.home');

});