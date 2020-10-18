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

  // scroll-up
  const wrapper = document.querySelector('.wrapper');
  if (wrapper.clientWidth > 850) {

    // scroll-up
    const offset = 700;
    const scrollUp = document.querySelector(".scroll-up");
    const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
    const pathLength = scrollUpSvgPath.getTotalLength();

    scrollUpSvgPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    scrollUpSvgPath.style.transition = 'stroke-dashoffset 20ms';

    const getTop = () => window.pageYOffset || document.documentElement.scrollTop;

    const updateDashoffset = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const dashoffset = pathLength - (getTop() * pathLength / height);

      scrollUpSvgPath.style.strokeDashoffset = dashoffset;
    }

    window.addEventListener("scroll", () => {
      // scroll up
      updateDashoffset();

      if (getTop() > offset) {
        // scroll up
        scrollUp.classList.add("scroll-up_active");
        // fixed-slider
      } else {
        // scroll up
        scrollUp.classList.remove("scroll-up_active");
      }
    });

    scrollUp.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    updateDashoffset();
  }

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

// animation 
  const animItems = document.querySelectorAll("._anim-items");

  if (animItems.length > 0) {
    window.addEventListener('scroll', animationScrolling);

    function animationScrolling() {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offsetFunc(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add("_anim-active");
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove("_anim-active");
          }
        }
      }
    }

    function offsetFunc(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
      }
    }

    setTimeout(() => {
      animationScrolling();
    }, 300);
  }
});