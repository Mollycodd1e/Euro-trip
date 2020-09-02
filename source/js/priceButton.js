var price = document.querySelector('.price');
var priceButtonComplex = price.querySelector('.price__link--complex');
var priceButtonEconomy = price.querySelector('.price__link--economy');
var feedbackButton = document.querySelector('.country__buy-link');
var modal = document.querySelector('.modal');
var modalInput = modal.querySelector('.modal__input--phone');
var feedbackTopDesktop = 2750;
var complexTopDesktop = 3450;
var feedbackTopTablet = 2050;
var complexTopTablet = 2800;
var feedbackTopMobile = 2000;
var complexTopMobile = 2700;

var openModal = function (button, constTop) {
  button.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (modal.classList.contains('modal--closed')) {
      modal.classList.remove('modal--closed');
      modal.classList.add('modal--opened');
      modal.style.top = constTop + 'px';
      modalInput.focus();
    } else {
      modal.classList.add('modal--closed');
      modal.classList.remove('modal--opened');
    }
  });
}

if (window.innerWidth >= 1920) {
  openModal(feedbackButton, feedbackTopDesktop);
  openModal(priceButtonComplex, complexTopDesktop);
  openModal(priceButtonEconomy, complexTopDesktop);
} else if (window.innerWidth >= 768 && window.innerWidth < 1920) {
  openModal(feedbackButton, feedbackTopTablet);
  openModal(priceButtonComplex, complexTopTablet);
  openModal(priceButtonEconomy, complexTopTablet);
} else {
  openModal(feedbackButton, feedbackTopMobile);
  openModal(priceButtonComplex, complexTopMobile);
  openModal(priceButtonEconomy, complexTopMobile);
}
