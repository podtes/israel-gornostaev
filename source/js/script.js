'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var pageHeader = document.querySelector('.page-header');
var callbackOpenButton = pageHeader.querySelector('.page-header__callback');
var callbackCloseButton = document.querySelector('.modal-order-callback__close-button');
var overlay = document.querySelector('.modal-position');
var callbackModal = overlay.querySelector('.modal-order-callback');
var callbackMeButton = callbackModal.querySelector('input[type="submit"]');
var successModal = overlay.querySelector('.modal-success');
var successModalOKButton = successModal.querySelector('button[type="button"]');
var successModalCloseButton = successModal.querySelector('.modal-order-callback__close-button');
var nameInput = callbackModal.querySelector('input[name="name"]');
var telephoneInput = callbackModal.querySelector('input[name="telephone"]');
var form = callbackModal.querySelector('form');

var programmButtonItems = document.querySelectorAll('.programms__item');
var programmGeneralButtonItem = document.querySelector('.programms__item--general');
var programmStudyButtonItem = document.querySelector('.programms__item--study');
var programmWorkButtonItem = document.querySelector('.programms__item--work');
var programmVolunteerButtonItem = document.querySelector('.programms__item--volunteer');
var programmReligionButtonItem = document.querySelector('.programms__item--religion');

var programmGeneralButton = programmGeneralButtonItem.querySelector('.programms__button--general');
var programmStudyButton = programmStudyButtonItem.querySelector('.programms__button--study');
var programmWorkButton = programmWorkButtonItem.querySelector('.programms__button--work');
var programmVolunteerButton = programmVolunteerButtonItem .querySelector('.programms__button--volunteer');
var programmReligionButton = programmReligionButtonItem.querySelector('.programms__button--religion');

var programmsTexts = document.querySelectorAll('.programms__about');
var programmGeneralText = document.querySelector('.programms__about--general');
var programmStudyText = document.querySelector('.programms__about--study');
var programmWorkText = document.querySelector('.programms__about--work');
var programmVolunteerText = document.querySelector('.programms__about--volunteer');
var programmReligionText = document.querySelector('.programms__about--religion');

// логика открытия и закрытия модальных окон
var closeCallbackModal = function () {
  overlay.classList.remove('modal-open');
  callbackModal.classList.remove('modal-open');
  document.removeEventListener('keydown', openCallbackModalPressEscHandler);
  overlay.removeEventListener('click', overlayClickHandler);
};
var openCallbackModal = function () {
  overlay.classList.add('modal-open');
  callbackModal.classList.add('modal-open');
  nameInput.focus();
  document.addEventListener('keydown', openCallbackModalPressEscHandler);
  overlay.addEventListener('click', overlayClickHandler);
};

var openCallbackModalPressEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeCallbackModal();
  }
};
var callbackOpenButtonClickHandler = function () {
  openCallbackModal();
};
var callbackOpenButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openCallbackModal();
  }
};
var callbackCloseButtonClickHandler = function () {
  closeCallbackModal();
};
var callbackCloseButtonPressEnterHandler = function (evt) {
  if (evt.keycode === ENTER_KEYCODE) {
    closeCallbackModal();
  }
};

var openSuccessModal = function () {
  overlay.classList.add('modal-open');
  successModal.classList.add('modal-open');
  document.addEventListener('keydown', openSuccessModalPressEscHandler);
  overlay.addEventListener('click', overlayClickHandler);
};
var closeSuccessModal = function () {
  overlay.classList.remove('modal-open');
  successModal.classList.remove('modal-open');
  document.removeEventListener('keydown', openSuccessModalPressEscHandler);
  overlay.removeEventListener('click', overlayClickHandler);
};

var openSuccessModalPressEscHandler = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closeSuccessModal();
  }
};
var successModalOKButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSuccessModal();
  }
};
var successModalCloseButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closeSuccessModal();
  }
};

var overlayClickHandler = function (evt) {
  if (callbackModal.classList.contains('modal-open') && evt.target === overlay) {
    closeCallbackModal();
  } else if (successModal.classList.contains('modal-open') && evt.target === overlay) {
    closeCallbackModal();
  }
};

callbackOpenButton.addEventListener('click', callbackOpenButtonClickHandler);
callbackCloseButton.addEventListener('click', callbackCloseButtonClickHandler);
callbackOpenButton.addEventListener('keydown', callbackOpenButtonPressEnterHandler);
callbackCloseButton.addEventListener('keydown', callbackCloseButtonPressEnterHandler);

successModalOKButton.addEventListener('click', closeSuccessModal);
successModalCloseButton.addEventListener('click', closeSuccessModal);
successModalOKButton.addEventListener('keydown', successModalOKButtonPressEnterHandler);
successModalCloseButton.addEventListener('keydown', successModalCloseButtonPressEnterHandler);

form.addEventListener('submit', function () {
  closeCallbackModal();
  openSuccessModal();
  // TODO: проблема с отправкой формы, окно с успешным сообщением открывается, но сразу же закрывается.
});

// переключение программ обучения
var deactiveateProgrammButton = function () {
  for (var i = 0; i < programmsTexts.length; i++) {
    if (programmsTexts[i].classList.contains('programms__about--active')) {
      programmsTexts[i].classList.remove('programms__about--active');
      break;
    }
  }
  for (var j = 0; j < programmButtonItems.length; j++) {
    console.log(programmButtonItems);
    if (programmButtonItems[j].classList.contains('programms__item--active')) {
      programmButtonItems[j].classList.remove('programms__item--active');
      break;
    }
  }
};

programmGeneralButton.addEventListener('click', function () {
  deactiveateProgrammButton();
  programmGeneralButtonItem.classList.add('programms__item--active');
  programmGeneralText.classList.add('programms__about--active');
});
programmStudyButton.addEventListener('click', function () {
  deactiveateProgrammButton();
  programmStudyButtonItem.classList.add('programms__item--active');
  programmStudyText.classList.add('programms__about--active');
});
programmWorkButton.addEventListener('click', function () {
  deactiveateProgrammButton();
  programmWorkButtonItem.classList.add('programms__item--active');
  programmWorkText.classList.add('programms__about--active');
});
programmVolunteerButton.addEventListener('click', function () {
  deactiveateProgrammButton();
  programmVolunteerButtonItem.classList.add('programms__item--active');
  programmVolunteerText.classList.add('programms__about--active');
});
programmReligionButton.addEventListener('click', function () {
  deactiveateProgrammButton();
  programmReligionButtonItem.classList.add('programms__item--active');
  programmReligionText.classList.add('programms__about--active');
});


