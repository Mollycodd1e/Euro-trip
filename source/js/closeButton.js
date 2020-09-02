var modal = document.querySelector('.modal');
var closeButton = modal.querySelector('.modal__close-button');

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add("modal--closed");
  modal.classList.remove("modal--opened");
});

document.addEventListener('keydown', function (evtBoard) {
  if (evtBoard.key === 'Escape') {
    modal.classList.add("modal--closed");
    modal.classList.remove("modal--opened")
  }
});
