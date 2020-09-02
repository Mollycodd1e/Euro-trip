var country = document.querySelector('.country');
var albaniaTab = country.querySelector('.country__link--albania');
var albaniaFeedback = country.querySelector('.country__wrapper--albania');
var greeceTab = country.querySelector('.country__link--greece');
var greeceFeedback = country.querySelector('.country__wrapper--greece');
var macedoniaTab = country.querySelector('.country__link--macedonia');
var macedoniaFeedback = country.querySelector('.country__wrapper--macedonia');
var montenegroTab = country.querySelector('.country__link--montenegro');
var montenegroFeedback = country.querySelector('.country__wrapper--montenegro');
var croatiaTab = country.querySelector('.country__link--croatia');
var croatiaFeedback = country.querySelector('.country__wrapper--croatia');

macedoniaTab.addEventListener("click", function() {
  var activeTab = country.querySelectorAll('.country__link--active');
  var activeFeedback = country.querySelectorAll('.country__wrapper--active');

  for (var i = 0;i < 1; i++) {
    activeFeedback[i].classList.remove('country__wrapper--active');
    activeTab[i].classList.remove('country__link--active');
  }
  macedoniaTab.classList.add('country__link--active');
  macedoniaFeedback.classList.add('country__wrapper--active');
})

albaniaTab.addEventListener("click", function() {
  var activeTab = country.querySelectorAll('.country__link--active');
  var activeFeedback = country.querySelectorAll('.country__wrapper--active');

  for (var i = 0;i < 1; i++) {
    activeFeedback[i].classList.remove('country__wrapper--active');
    activeTab[i].classList.remove('country__link--active');
  }
  albaniaTab.classList.add('country__link--active');
  albaniaFeedback.classList.add('country__wrapper--active');
})

greeceTab.addEventListener("click", function() {
  var activeTab = country.querySelectorAll('.country__link--active');
  var activeFeedback = country.querySelectorAll('.country__wrapper--active');

  for (var i = 0;i < 1; i++) {
    activeFeedback[i].classList.remove('country__wrapper--active');
    activeTab[i].classList.remove('country__link--active');
  }
  greeceTab.classList.add('country__link--active');
  greeceFeedback.classList.add('country__wrapper--active');
})

montenegroTab.addEventListener("click", function() {
  var activeTab = country.querySelectorAll('.country__link--active');
  var activeFeedback = country.querySelectorAll('.country__wrapper--active');

  for (var i = 0;i < 1; i++) {
    activeFeedback[i].classList.remove('country__wrapper--active');
    activeTab[i].classList.remove('country__link--active');
  }
  montenegroTab.classList.add('country__link--active');
  montenegroFeedback.classList.add('country__wrapper--active');
})

croatiaTab.addEventListener("click", function() {
  var activeTab = country.querySelectorAll('.country__link--active');
  var activeFeedback = country.querySelectorAll('.country__wrapper--active');

  for (var i = 0;i < 1; i++) {
    activeFeedback[i].classList.remove('country__wrapper--active');
    activeTab[i].classList.remove('country__link--active');
  }
  croatiaTab.classList.add('country__link--active');
  croatiaFeedback.classList.add('country__wrapper--active');
})
