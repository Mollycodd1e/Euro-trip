var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

navToggle.addEventListener('click', function (evt) {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});