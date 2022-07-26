console.log('1. Слайдер изображений в секции destinations +50 \n2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап + 50 \n3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение). +25\n total = 125' );

// !Start Burger header
(function () {

  const burgerMenu = document.querySelector('.burger');
  const menu = document.querySelector('.header__nav');
  const menuClose = document.querySelector('.header__nav-close');
  const linkClose = document.querySelectorAll('.header__link');
  const allHideClose = document.querySelector('.pop-up__in-mobile-burger ');

  burgerMenu.addEventListener('click', () => {
    menu.classList.add('header__nav-active');
  });

  menuClose.addEventListener('click', () => {
    menu.classList.remove('header__nav-active');
  });

  for ( let i = 0; i < linkClose.length; i++ ) {
    linkClose[i].addEventListener('click', () => {
      menu.classList.toggle('header__nav-active');
    })
  }

  allHideClose.addEventListener('click', () => {
  menu.classList.remove('header__nav-active');
  });

}()); 

// !End Burger header



// START POPUP

  // ? POP-UP 1 Start
  // Кнопка входа в секции head
  const headerLogin = document.querySelector('.header__login');
  // Поверх POPUP н всю страницу
  const popupContainer = document.querySelector('.popup-container');
  // Весь попап 1
  const closePopUp = document.querySelector('.pop-up__in');
  // попап 650 на 660
  const popUp = document.querySelector('.pop-up__in-wrapper')

  // Кнопка входа тоглит КЛАСС pop-up__in-active и добавляет его(сьезжает с верху POPUP)
  headerLogin.addEventListener('click', () => {
    popUp.classList.toggle('pop-up__in-active');
    popupContainer.classList.toggle('popup-container-active');
  })
  
  // Закрываем POPUP кликом на ВЕСЬ POPUP
  popupContainer.addEventListener('click', (e) => {
  //  если pop-up__in содержит pop-up__in
    if (e.target.classList.contains('popup-container')) {
      // Удаляем КЛАСС pop-up__in-active (Уезжает в верх)
      popUp.classList.remove('pop-up__in-active');
    }
    popupContainer.classList.toggle('popup-container-active');
  })


  // Форма
  const form = document.querySelector('.pop-up__in-form');
  // если нажать на submit в форме это 3 input
  form.addEventListener('submit', () => {
    // нужно создать
    const formData = new FormData(form);
    //  Обращение к input по их NAME и методом GET добавляем значение в переменную
    const login = formData.get('login-name');
    const password = formData.get('password-name');
    alert(`Login: ${login}\nPassword: ${password}`)
  });
  
  // ? End pop-up 1


  // ! Start pop-up 2
  // Весь попап 2
  const popupTwo = document.querySelector('.pop-up__up');
  // Ссылка из POPUP 1 для перехода на POPUP 2
  const register = document.querySelector('.pop-up__in-register-link');
  // Весь попап 2
  const closePopUpTwo = document.querySelector('.pop-up__up');
  // Ссылка из POPUP 2 для перехода на POPUP 1
  const linkTwo = document.querySelector('.pop-up__up-register-link');

    // Поверх POPUP н всю страницу
  const popupContainer2 = document.querySelector('.popup-container');

  //  // Закрываем POPUP кликом на ВЕСЬ POPUP
  //  popupContainer2.addEventListener('click', (e) => {
  //   //  если pop-up__in содержит pop-up__in
  //     if (e.target.classList.contains('popup-container')) {
  //       // Удаляем КЛАСС pop-up__in-active (Уезжает в верх)
  //       popupTwo.classList.add('.popup__two');
  //     }
  //     popupContainer.classList.remove('popup-container-active');
  //   })

  // ! TOGGLE - удаляет либо добавлят класс
  // При клике на ссылку REGISTER
  register.addEventListener('click', () => {
  // Тоглим КЛАСС 'hid'(display: none;), в нашем случаи мы его добавляем (что бы скрыть POPUP 1)
  closePopUp.classList.toggle('hid');
  // Удаляем с POPUP 2 КЛАСС popup__two(display: none;) в нашем случаи мы его удаляем(что бы появился POPUP 2)
  popupTwo.classList.remove('popup__two'); 
  })

  // Форма 2
  const formTwo = document.querySelector('.pop-up__up-form');
  // если нажать на submit в форме это 3 input
  formTwo.addEventListener('submit', () => {
  // нужно создать
    const formDataTwo = new FormData(formTwo);
    //  Обращение к input по их NAME и методом GET добавляем значение в переменную
    const login = formDataTwo.get('login-name');
    const password = formDataTwo.get('password-name');
    alert(`Login: ${login}\nPassword: ${password}`)
  });

  // Закрываем POPUP 2 кликом на ВЕСЬ POPUP 2
  popupContainer2.addEventListener('click', (e) => {
  // если pop-up__up содержит pop-up__up
    if (e.target.classList.contains('popup-container')) {
      // Добавляем Класс popup__two(display: none;) в нашем случаи мы его добавляем(что бы скрылся POPUP 2)
      popupTwo.classList.add('popup__two');
      // Добавляем Класс hid(display: none;) в нашем случаи мы его добавляем(что бы появился POPUP 1)
      closePopUp.classList.remove('hid');
  }
  })

  // При клике на ссылку из POPUP 2 переходим на POPUP 1 
  linkTwo.addEventListener('click', () => {
    //  Тоглим КЛАСС 'hid'(display: none;), в нашем случаи мы его удаляем (что бы появился POPUP 1)
    closePopUp.classList.toggle('hid');
    // Добавляем КЛАСС popup__two(display: none;) что бы скрыть Весь попап 2
    popupTwo.classList.add('popup__two');
  })
  // ! End pop-up 2

// END POP-UP 



// Stapt POP-UP Mobile
  
  // ? POP-UP 1 Start Mobile
  // Кнопка входа в секции head
  const headerLoginMobile = document.querySelector('.account');
  // Весь попап 1
  const closePopUpMobile = document.querySelector('.pop-up__in-mobile');
  // попап 650 на 660
  const popUpMobile = document.querySelector('.pop-up__in-wrapper-mobile')

  // Поверх POPUP н всю страницу
  const popupContainerMobile = document.querySelector('.popup-container-mobile');


  // Кнопка входа тоглит КЛАСС pop-up__in-active и добавляет его(сьезжает с верху POPUP)
  headerLoginMobile.addEventListener('click', () => {
    popUpMobile.classList.toggle('pop-up__in-active-mobile');
    popupContainerMobile.classList.toggle('popup-container-active-mobile');
  })
  
  // Закрываем POPUP кликом на ВЕСЬ POPUP
  popupContainerMobile.addEventListener('click', (e) => {
  //  если pop-up__in содержит pop-up__in
    if (e.target.classList.contains('popup-container-mobile')) {
      // Удаляем КЛАСС pop-up__in-active (Уезжает в верх)
      popUpMobile.classList.remove('pop-up__in-active-mobile');
    }
      popupContainerMobile.classList.toggle('popup-container-active-mobile');
  })

  // Форма
  const formMobile = document.querySelector('.pop-up__in-form-mobile');
  // если нажать на submit в форме это 3 input
  formMobile.addEventListener('submit', () => {
    // нужно создать
    const formDataMobile = new FormData(formMobile);
    //  Обращение к input по их NAME и методом GET добавляем значение в переменную
    const loginMobile = formDataMobile.get('login-name-mobile');
    const passwordMobile = formDataMobile.get('password-name-mobile');
    alert(`Login: ${loginMobile}\nPassword: ${passwordMobile}`)
  });
  // ? End pop-up 1 Mobile


   // ! Start pop-up 2
  // Весь попап 2
  const popupTwoMobile = document.querySelector('.pop-up__up-mobile');
  // Ссылка из POPUP 1 для перехода на POPUP 2
  const registerMobile = document.querySelector('.pop-up__in-register-link-mobile');
  // // Весь попап 2
  // const closePopUpTwoMobile = document.querySelector('.pop-up__up-mobile');
  // Ссылка из POPUP 2 для перехода на POPUP 1
  const linkTwoMobile = document.querySelector('.pop-up__up-register-link-mobile'); 

  // Поверх POPUP н всю страницу
  const popupContainerMobile2 = document.querySelector('.popup-container-mobile');



  // ! TOGGLE - удаляет либо добавлят класс
  // При клике на ссылку REGISTER
  registerMobile.addEventListener('click', () => {
  // Тоглим КЛАСС 'hid'(display: none;), в нашем случаи мы его добавляем (что бы скрыть POPUP 1)
  closePopUpMobile.classList.toggle('hid-mobile');
  // Удаляем с POPUP 2 КЛАСС popup__two(display: none;) в нашем случаи мы его удаляем(что бы появился POPUP 2)
  popupTwoMobile.classList.remove('popup__two-mobile'); 
  })

  // Форма 2
  const formTwoMobile = document.querySelector('.pop-up__up-form-mobile');
  // если нажать на submit в форме это 3 input
  formTwoMobile.addEventListener('submit', () => {
  // нужно создать
    const formDataTwoMobile = new FormData(formTwoMobile);
    //  Обращение к input по их NAME и методом GET добавляем значение в переменную
    const loginTwoMobile = formDataTwoMobile.get('login-name-two-mobile');
    const passwordTwoMobile = formDataTwoMobile.get('password-name-two-mobile');
    alert(`Login: ${loginTwoMobile}\nPassword: ${passwordTwoMobile}`)
  });




  // Закрываем POPUP 2 кликом на ВЕСЬ POPUP 2
  popupContainer2.addEventListener('click', (e) => {
    // если pop-up__up содержит pop-up__up
      if (e.target.classList.contains('popup-container')) {
        // Добавляем Класс popup__two(display: none;) в нашем случаи мы его добавляем(что бы скрылся POPUP 2)
        popupTwo.classList.add('popup__two');
        // Добавляем Класс hid(display: none;) в нашем случаи мы его добавляем(что бы появился POPUP 1)
        closePopUp.classList.remove('hid');
    }
    })
  
    // При клике на ссылку из POPUP 2 переходим на POPUP 1 
    linkTwo.addEventListener('click', () => {
      //  Тоглим КЛАСС 'hid'(display: none;), в нашем случаи мы его удаляем (что бы появился POPUP 1)
      closePopUp.classList.toggle('hid');
      // Добавляем КЛАСС popup__two(display: none;) что бы скрыть Весь попап 2
      popupTwo.classList.add('popup__two');
    })



  // Закрываем POPUP 2 кликом на ВЕСЬ POPUP 2
  popupContainerMobile2.addEventListener('click', (e) => {
  // если pop-up__up содержит pop-up__up
    if (e.target.classList.contains('popup-container-mobile')) {
      // Добавляем Класс popup__two(display: none;) в нашем случаи мы его добавляем(что бы скрылся POPUP 2)
      popupTwoMobile.classList.add('popup__two-mobile');
      // Добавляем Класс hid(display: none;) в нашем случаи мы его добавляем(что бы появился POPUP 1)
      closePopUpMobile.classList.remove('hid-mobile');
  }
  })

  // При клике на ссылку из POPUP 2 переходим на POPUP 1 
  linkTwoMobile.addEventListener('click', () => {
    //  Тоглим КЛАСС 'hid'(display: none;), в нашем случаи мы его удаляем (что бы появился POPUP 1)
    closePopUpMobile.classList.toggle('hid-mobile');
    // Добавляем КЛАСС popup__two(display: none;) что бы скрыть Весь попап 2
    popupTwoMobile.classList.add('popup__two-mobile');
  })
  // ! End pop-up 2

// END POP-UP Mobile



// // Start Slider Desctop

//   let pointLeft = document.querySelector('.point-left');
//   let pointCenter = document.querySelector('.point-center')
//   let pointRight = document.querySelector('.point-right');
//   let carousel = document.querySelector('.destinations__carousel');

//   // ! LEFT
//   const moveLeft = () => {
//     // слушаю клик в лево (добавлением анимации 'transition-left')
//     carousel.classList.add('transition-left');
//     // делаем кнопку не активной на время анимации
//     pointLeft.removeEventListener('click', moveLeft);
//     pointRight.removeEventListener('click', moveRight);
//   }
//   // moveLeft - делаем как параметр функции и выносим в отдельную переменную
//   pointLeft.addEventListener('click', moveLeft);

//   // ! Right
//   const moveRight = () => {
//     // слушаю клик в лево (добавлением анимации 'transition-right')
//     carousel.classList.add('transition-right');
//     // делаем кнопку не активной на время анимации
//     pointRight.removeEventListener('click', moveRight);
//     pointLeft.removeEventListener('click', moveLeft);
//   }
//   // moveRight - делаем как параметр функции и выносим в отдельную переменную
//    pointRight.addEventListener('click', moveRight);

//   /* 
//   слушаю карусель(animationend - отвечает когда происходит конец анимации)
//   В конце анимации, убирает класс 'transition-left'
//   */ 
//   carousel.addEventListener('animationend', (animationEvent) => {
   
//     if (animationEvent.animationName === 'move-left') {
//        // убираю класс 'transition-left', что бы снова работала кнопка
//     carousel.classList.remove('transition-left');
//     // получаем елементы которые находятся с лева от анимации 
//     // И активному елементу присваиваем (".carousel-element-left")
//     // теперь во центру остаеться который был с лева
//     const leftItem = document.querySelector(".carousel-element-left").innerHTML; 
//     document.querySelector(".carousel-element-active").innerHTML = leftItem; 
//     } else {
//       // убираю класс 'transition-right', что бы снова работала кнопка
//     carousel.classList.remove('transition-right');
//     }

//     // делаем кнопку активной когда анимация заканчивается
//     pointLeft.addEventListener('click', moveLeft);
//     // делаем кнопку активной когда анимация заканчивается
//     pointRight.addEventListener('click', moveRight);
//   })


// // End Slider Desctop


// Start Slider Desctop

  let stepDes = 0; // смещение от левого края

  let pointLeft = document.querySelector('.left-carousel');
  let pointRight = document.querySelector('.right-carousel');
  const carousel = document.querySelector('.destinations__carousel');
  const dotsDes = document.querySelectorAll('.point-desk');

  // вешаем на кнопку событие
  pointLeft.addEventListener('click', () => {
    stepDes += 860; // добавляем размер картинки
    if (stepDes === 2580) {
      stepDes = 0;
    }
    carousel.style.left = stepDes + 'px'

    for (j = 0; j < dotsDes.length; j++) {
      if (stepDes == 1720) {
        dotsDes[0].classList.remove('point-slider-active-des');
        dotsDes[1].classList.remove('point-slider-active-des');
        dotsDes[2].classList.add('point-slider-active-des');
      }

      if (stepDes == 0) {
        dotsDes[1].classList.add('point-slider-active-des');
        dotsDes[0].classList.remove('point-slider-active-des');
        dotsDes[2].classList.remove('point-slider-active-des');
      }
  
      if (stepDes == 860) {
        dotsDes[2].classList.remove('point-slider-active-des');
        dotsDes[0].classList.add('point-slider-active-des');
        dotsDes[1].classList.remove('point-slider-active-des');
      }
    }
  })

  // вешаем на кнопку событие
  pointRight.addEventListener('click', () => {
    stepDes -= 860; // добавляем размер картинки
    if (stepDes === -2580 ) {
      stepDes = 0;
    }
    carousel.style.left = stepDes + 'px'

    for (j = 0; j < dotsDes.length; j++) {
     
      if (stepDes == -1720) {
        dotsDes[2].classList.remove('point-slider-active-des');
        dotsDes[1].classList.remove('point-slider-active-des');
        dotsDes[0].classList.add('point-slider-active-des');
      }

      if (stepDes == 0) {
        dotsDes[1].classList.add('point-slider-active-des');
        dotsDes[0].classList.remove('point-slider-active-des');
        dotsDes[2].classList.remove('point-slider-active-des');
      }
  
      if (stepDes == -860) {
        dotsDes[0].classList.remove('point-slider-active-des');
        dotsDes[2].classList.add('point-slider-active-des');
        dotsDes[1].classList.remove('point-slider-active-des');
      }
    }
  })

  
  // const imagesDes = document.querySelectorAll('.destinations__wraper-image img');
  // const sliderDes = document.querySelector('.destinations__carousel');
  // let pointLeft = document.querySelector('.carousel-element-left');
  // let pointRight = document.querySelector('.carousel-element-right');
  // const dotsDes = document.querySelectorAll('.point');
  // let stepDes = 0; // смещение от левого края
  // let widthDes;

  // function sizesDes() {
  //   console.log('resize');
  //   widthDes = document.querySelector('.destinations__wraper').offsetWidth;
  //   console.log(widthDes)
  //   sliderDes.style.width = (widthDes) * imagesDes.length + 'px';
  //   imagesDes.forEach(itemDes => {
  //     itemDes.style.width = widthDes - 640 + 'px';
  //     itemDes.style.height = 'auto';
  //     moveDes ();
  //   })
  // }
  // window.addEventListener('resize', sizesDes);
  // sizesDes();
  
  // pointLeft.addEventListener('click', () => {
  //   stepDes--;
  //   if (stepDes < 0 ) {
  //     stepDes = imagesDes.length -1;
  //   }
  //   moveDes ();
  
  //   for (i = 0; i < dotsDes.length; i++) {
  //     if (stepDes == 0) {
  //       dotsDes[0].classList.add('point-slider-active-des');
  //       dotsDes[1].classList.remove('point-slider-active-des');
  //       dotsDes[2].classList.remove('point-slider-active-des');
  //     }
     
  //     if (stepDes == 2) {
  //       dotsDes[0].classList.remove('point-slider-active-des');
  //       dotsDes[1].classList.remove('point-slider-active-des');
  //       dotsDes[2].classList.add('point-slider-active-des');
  //     }
  
  //     if (stepDes == 1) {
  //       dotsDes[0].classList.remove('point-slider-active-des');
  //       dotsDes[1].classList.add('point-slider-active-des');
  //       dotsDes[2].classList.remove('point-slider-active-des');
  //     }
       
  //   }
  // }) 
  
  // pointRight.addEventListener('click', () => {
  //   stepDes++;
  //   if (stepDes >= imagesDes.length) {
  //     stepDes = 0;
  //   }
  //   moveDes ();
  
  //   for (i = 0; i < dotsDes.length; i++) {
  //     if (stepDes == 0) {
  //       dotsDes[0].classList.add('point-slider-active-des');
  //       dotsDes[1].classList.remove('point-slider-active-des');
  //       dotsDes[2].classList.remove('point-slider-active-des');
  //     }
     
  //     if (stepDes == 2) {
  //       dotsDes[0].classList.remove('point-slider-active-des');
  //       dotsDes[1].classList.remove('point-slider-active-des');
  //       dotsDes[2].classList.add('point-slider-active-des');
  //     }
  
  //     if (stepDes == 1) {
  //       dotsDes[0].classList.remove('point-slider-active-des');
  //       dotsDes[1].classList.add('point-slider-active-des');
  //       dotsDes[2].classList.remove('point-slider-active-des');
  //     }
       
  //   }
  
  // }) 
  
  // function moveDes () {
  //   sliderDes.style.transform = 'translate(-' + stepDes * widthDes + 'px)';
  // }


// End Slider Desctop




// Start Slider Mobile

// let stepMobile = 0; // смещение от левого края

// let arrowLeftMobile = document.querySelector('.arrow-left');
// let arrowRightMobile = document.querySelector('.arrow-right');
// const carouselMobile = document.querySelector('.destinations__wraper-image-slider');
// let point = document.querySelectorAll('.point-slider') 

// // вешаем на кнопку событие
// arrowLeftMobile.addEventListener('click', () => {
//   stepMobile += 390; // добавляем размер картинки
//   if (stepMobile === 1170) {
//     stepMobile = 0;
//   }
//   carouselMobile.style.left = stepMobile + 'px'
// })

// // вешаем на кнопку событие
// arrowRightMobile.addEventListener('click', () => {
//   stepMobile -= 390; // добавляем размер картинки
//   if (stepMobile=== -1170 ) {
//     stepMobile = 0;
//   }
//   carouselMobile.style.left = stepMobile + 'px'
// })

const images = document.querySelectorAll('.slider__img');
const slider = document.querySelector('.destinations__wraper-image-slider');
const arrowLeft = document.querySelector('.arrow-slider-left');
const arrowRight = document.querySelector('.arrow-slider-right');
const dots = document.querySelectorAll('.point-slider');
let stepMobile = 0; // ссылается на активный слайдер
let width;

function sizes() {
  console.log('resize');
  width = document.querySelector('.destinations__wraper-slider').offsetWidth;
  slider.style.width = width * images.length + 'px';
  images.forEach(item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
    move ();
  })
}
window.addEventListener('resize', sizes);
sizes();

arrowLeft.addEventListener('click', () => {
  stepMobile--;
  if (stepMobile < 0 ) {
    stepMobile = images.length -1;
  }
  move ();

  for (i = 0; i < dots.length; i++) {
    if (stepMobile == 0) {
       dots[0].classList.add('point-slider-active');
      dots[1].classList.remove('point-slider-active');
      dots[2].classList.remove('point-slider-active');
    }
   
    if (stepMobile == 2) {
      dots[0].classList.remove('point-slider-active');
      dots[1].classList.remove('point-slider-active');
      dots[2].classList.add('point-slider-active');
    }

    if (stepMobile == 1) {
      dots[0].classList.remove('point-slider-active');
      dots[1].classList.add('point-slider-active');
      dots[2].classList.remove('point-slider-active');
    }
     
  }
}) 

arrowRight.addEventListener('click', () => {
  stepMobile++;
  if (stepMobile >= images.length) {
    stepMobile = 0;
  }
  move ();

  for (i = 0; i < dots.length; i++) {
    if (stepMobile == 0) {
       dots[0].classList.add('point-slider-active');
      dots[1].classList.remove('point-slider-active');
      dots[2].classList.remove('point-slider-active');
    }
   
    if (stepMobile == 2) {
      dots[0].classList.remove('point-slider-active');
      dots[1].classList.remove('point-slider-active');
      dots[2].classList.add('point-slider-active');
    }

    if (stepMobile == 1) {
      dots[0].classList.remove('point-slider-active');
      dots[1].classList.add('point-slider-active');
      dots[2].classList.remove('point-slider-active');
    }
     
  }

}) 

function move () {
  slider.style.transform = 'translate(-' + stepMobile * width + 'px)';
}

// for (i = 0; i < dots.length; i++) {
//   if (stepMobile == 1)
//   dots[i].classList.add('point-slider-active');
// }

// End Slider Mobile

