'use strict';

var phoneInputModal = document.getElementById('modal-order-callback__phone-input-field');
var phoneInputDetails = document.getElementById('details__phone-input-field');
var phoneInputWantGo = document.getElementById('want-go__phone-input-field');
var errorMessageWantGo = document.querySelector('.want-go__error-message');
var errorMessageDetails = document.querySelector('.details__error-message');
var errorMessageModal = document.querySelector('.modal-order-callback__error-message');

// валидация инпута в модальном окне
import IMask from 'imask';
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true
};
var maskToModal = IMask(phoneInputModal, maskOptions);
phoneInputModal.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputModal, errorMessageModal);
});

// валидация инпута в секции подробностей
var maskToDetails = IMask(phoneInputDetails, maskOptions);
phoneInputDetails.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputDetails, errorMessageDetails);
});

// валидация инпута в секции хочу поехать
var maskToWantGo = IMask(phoneInputWantGo, maskOptions);
phoneInputWantGo.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputWantGo, errorMessageWantGo);
});
