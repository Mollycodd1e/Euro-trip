var indexForm = document.querySelector('.modal');
var indexInputPhone = indexForm.querySelector('.modal__input--phone');
var indexInputMail = indexForm.querySelector('.modal__input--mail');
var indexFormButton = indexForm.querySelector('.modal__button');
var errorMessage = indexForm.querySelector('.modal__phone-error');

indexForm.addEventListener("submit", function (evt) {
  if (!indexInputMail.value) {
    evt.preventDefault();
    indexInputMail.placeholder = 'Введите e-mail';
  }
  if (indexInputMail.onfocus) {
    indexInputMail.placeholder = '';
  }
});

indexForm.addEventListener("submit", function (evt) {
  if (!indexInputPhone.value) {
    evt.preventDefault();
    indexInputPhone.placeholder = 'Введите телефон';
    errorMessage.classList.add('modal__phone-error--show');
  }
});

indexForm.addEventListener("invalid", function (evt) {
  if (!indexInputPhone.value) {
    evt.preventDefault();
    indexInputPhone.placeholder = 'Введите телефон';
    errorMessage.classList.add('modal__phone-error--show');
  }
});
