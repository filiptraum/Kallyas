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

  // twoFonChanging
  function twoFonChanging(bgblockSelector) {

    const bgblock = document.querySelector(bgblockSelector);

    setTimeout(() => {
      bgblock.classList.add('about__pictures-fon1');
    }, 3500);

    setTimeout(() => {
      bgblock.classList.remove('about__pictures-fon1');
      bgblock.classList.add('about__pictures-fon2');
    }, 7000);

    setTimeout(() => {
      bgblock.classList.remove('about__pictures-fon2');
      bgblock.classList.add('about__pictures-fon3');
    }, 10500);

    setTimeout(() => {
      bgblock.classList.remove('about__pictures-fon3');
      return twoFonChanging(".about__pictures");
    }, 14000);
  }
  twoFonChanging(".about__pictures");

});

// changeBtn
const changeBtn = (itemsSelector, btnSelector, contentSelector, classHidden, activeBtn, classAnim) => {

  const itemsBlock = document.querySelector(itemsSelector);
  const btn = document.querySelectorAll(btnSelector);
  const content = document.querySelectorAll(contentSelector);

  function hideContent() {
    content.forEach(item => {
      item.classList.add(classHidden);
      item.classList.remove(classAnim);
    });

    btn.forEach(item => {
      item.classList.remove(activeBtn);
    });
  }

  function showContent(i = 0) {
    btn[i].classList.add(activeBtn);
    let thisContent = document.querySelectorAll(btn[i].classList[0]);
    thisContent.forEach((item) => {
      item.classList.remove(classHidden);
      item.classList.remove(classAnim);
      setTimeout(() => {
        item.classList.add(classAnim);
      }, 0.1);
    });
  }

  hideContent();
  showContent();

  itemsBlock.addEventListener('click', (e) => {
    const target = e.target;
    if (target.classList.contains(btnSelector.replace(/\./, ""))) {
      btn.forEach((item, i) => {
        if (target == item) {
          hideContent();
          showContent(i);
        }
      });
    }
  });
};

changeBtn(".works__list", ".works__button", ".works__box", "hidden_image", "active", "works_box-anim");