'use strict';
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
var form = callbackModal.querySelector('form');

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
  if (evt.keyCode === 27) {
    closeCallbackModal();
  }
};
var callbackOpenButtonClickHandler = function () {
  openCallbackModal();
};
var callbackOpenButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === 13) {
    openCallbackModal();
  }
};
var callbackCloseButtonClickHandler = function () {
  closeCallbackModal();
};
var callbackCloseButtonPressEnterHandler = function (evt) {
  if (evt.keycode === 13) {
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
  if (evt.keyCode === 27) {
    closeSuccessModal();
  }
};
var successModalOKButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === 13) {
    closeSuccessModal();
  }
};
var successModalCloseButtonPressEnterHandler = function (evt) {
  if (evt.keyCode === 13) {
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
form.addEventListener('submit', function () {
  closeCallbackModal();
  openSuccessModal();
});
//TODO: проблема с отправкой формы, окно с успешным сообщением открывается, но сразу же закрывается.

successModalOKButton.addEventListener('click', closeSuccessModal);
successModalCloseButton.addEventListener('click', closeSuccessModal);
successModalOKButton.addEventListener('keydown', successModalOKButtonPressEnterHandler);
successModalCloseButton.addEventListener('keydown', successModalCloseButtonPressEnterHandler);
