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

var closeCallbackModal = function () {
  overlay.classList.remove('modal-open');
  callbackModal.classList.remove('modal-open');
  document.removeEventListener('keydown', openCallbackModalPressEscHandler);
};
var openCallbackModal = function () {
  overlay.classList.add('modal-open');
  callbackModal.classList.add('modal-open');
  document.addEventListener('keydown', openCallbackModalPressEscHandler);
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
};
var closeSuccessModal = function () {
  overlay.classList.remove('modal-open');
  successModal.classList.remove('modal-open');
  document.removeEventListener('keydown', openSuccessModalPressEscHandler);
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

callbackOpenButton.addEventListener('click', callbackOpenButtonClickHandler);
callbackCloseButton.addEventListener('click', callbackCloseButtonClickHandler);
callbackOpenButton.addEventListener('keydown', callbackOpenButtonPressEnterHandler);
callbackCloseButton.addEventListener('keydown', callbackCloseButtonPressEnterHandler);
callbackMeButton.addEventListener('click', function () {
  closeCallbackModal();
  openSuccessModal();
});

successModalOKButton.addEventListener('click', closeSuccessModal);
successModalCloseButton.addEventListener('click', closeSuccessModal);
successModalOKButton.addEventListener('keydown', successModalOKButtonPressEnterHandler);
successModalCloseButton.addEventListener('keydown', successModalCloseButtonPressEnterHandler);
