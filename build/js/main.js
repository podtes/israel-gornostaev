'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var pageHeader = document.querySelector('.page-header');
var callbackOpenButton = pageHeader.querySelector('.page-header__callback');
var callbackCloseButton = document.querySelector('.modal-order-callback__close-button');
var overlay = document.querySelector('.modal-position');
var callbackModal = overlay.querySelector('.modal-order-callback');
var successModal = overlay.querySelector('.modal-success');
var successModalOKButton = successModal.querySelector('button[type="button"]');
var successModalCloseButton = successModal.querySelector('.modal-success__close-button');
var nameInput = callbackModal.querySelector('input[name="name"]');
var callbackModalForm = callbackModal.querySelector('form');
var wantGoForm = document.querySelector('.want-go').querySelector('form');
var detailsForm = document.querySelector('.details').querySelector('form');

var phoneInputModal = document.getElementById('modal-order-callback__phone-input-field');
var phoneInputDetails = document.getElementById('details__phone-input-field');
var phoneInputWantGo = document.getElementById('want-go__phone-input-field');
var errorMessageWantGo = document.querySelector('.want-go__error-message');
var errorMessageDetails = document.querySelector('.details__error-message');
var errorMessageModal = document.querySelector('.modal-order-callback__error-message');


var faqQuestionButtons = document.querySelectorAll('.faq__question');

var reviewSlides = document.querySelectorAll('.reviews__item');
var nextReviewButton = document.querySelector('.reviews__next-review');
var currentReviewCount = document.querySelector('.reviews__start-review');
var previousReviewButton = document.querySelector('.reviews__previous-review');

var programmButtonItems = document.querySelectorAll('.programms__item');
var programmsButtons = document.querySelectorAll('.programms__button');
var programmsTexts = document.querySelectorAll('.programms__about');

var photosLiveIsrael = document.querySelectorAll('.live-israel__photo');
var indicatorsLiveIsrael = document.querySelectorAll('.live-israel__indicator');


// логика открытия и закрытия модальных окон
var resetForm = function (form, errorMessage) {
  form.reset();
  errorMessage.style.display = 'none';
};
var closeCallbackModal = function () {
  overlay.classList.remove('modal-open');
  callbackModal.classList.remove('modal-open');
  document.removeEventListener('keydown', openCallbackModalPressEscHandler);
  overlay.removeEventListener('click', overlayClickHandler);
  phoneInputModal.style.border = '';
  resetForm(callbackModalForm, errorMessageModal);
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
  if (evt.keyCode === ENTER_KEYCODE) {
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
    closeSuccessModal();
  }
};

// обработчики кнопок FAQ
var removefaqQuestionButtonActiveClass = function () {
  for (var i = 0; i < faqQuestionButtons.length; i++) {
    if (faqQuestionButtons[i].classList.contains('faq__question--active')) {
      faqQuestionButtons[i].classList.remove('faq__question--active');
    }
  }
};
var faqQuestionButtonClickHandler = function (evt) {
  if (evt.currentTarget.classList.contains('faq__question--active')) {
    evt.currentTarget.classList.remove('faq__question--active');
  } else {
    removefaqQuestionButtonActiveClass();
    evt.currentTarget.classList.toggle('faq__question--active');
  }
};
var faqQuestionButtonPressEnterHandler = function (evt) {
  removefaqQuestionButtonActiveClass();
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.target.classList.toggle('faq__question--active');
  }
};

// валидация полей ввода
var validatePhoneInputHandler = function (field, errorMessage) {
  if (field.value.length > 0 && field.value.length < 16) {
    field.style.border = '2px solid #ff0000';
    errorMessage.style.display = 'block';
    field.setCustomValidity('Неверный формат!');
  } else if (field.value.length === 0) {
    field.style.border = '';
    errorMessage.style.display = 'none';
    field.setCustomValidity('');
  } else {
    field.style.border = '2px solid #484848';
    errorMessage.style.display = 'none';
    field.setCustomValidity('');
  }
};

// переключение программ обучения
var deactiveateProgrammButton = function () {
  for (var i = 0; i < programmsTexts.length; i++) {
    if (programmsTexts[i].classList.contains('programms__about--active')) {
      programmsTexts[i].classList.remove('programms__about--active');
      break;
    }
  }
  for (var j = 0; j < programmButtonItems.length; j++) {
    if (programmButtonItems[j].classList.contains('programms__item--active')) {
      programmButtonItems[j].classList.remove('programms__item--active');
      break;
    }
  }
};
var showActiveProgramm = function (button, buttonItem, text) {
  button.addEventListener('click', function () {
    deactiveateProgrammButton();
    buttonItem.classList.add('programms__item--active');
    text.classList.add('programms__about--active');
  });
};
var addListerersOnProgrammsButtons = function () {
  for (var i = 0; i < programmButtonItems.length; i++) {
    showActiveProgramm(programmsButtons[i], programmButtonItems[i], programmsTexts[i]);
  }
};

// логика открытия и закрытия частых вопросов
var switchFaqQuestions = function () {
  if (faqQuestionButtons) {
    for (var i = 0; i < faqQuestionButtons.length; i++) {
      faqQuestionButtons[i].addEventListener('click', faqQuestionButtonClickHandler);
      faqQuestionButtons[i].addEventListener('keydown', faqQuestionButtonPressEnterHandler);
    }
  }
};

// логика переключения слайдера секции live-israel
var hideActivePhotoAndIndicator = function () {
  for (var i = 0; i < photosLiveIsrael.length; i++) {
    photosLiveIsrael[i].style.display = 'none';
  }
  for (var j = 0; j < indicatorsLiveIsrael.length; j++) {
    if (indicatorsLiveIsrael[j].classList.contains('live-israel__indicator--active')) {
      indicatorsLiveIsrael[j].classList.remove('live-israel__indicator--active');
    }
  }
};
var showActiveSlide = function (indicator, photo) {
  indicator.addEventListener('click', function () {
    hideActivePhotoAndIndicator();
    indicator.classList.add('live-israel__indicator--active');
    photo.style.display = 'block';
  });
};
var addListerersOnLiveIsraelIndicators = function () {
  for (var i = 0; i < indicatorsLiveIsrael.length; i++) {
    showActiveSlide(indicatorsLiveIsrael[i], photosLiveIsrael[i]);
  }
};

// открытие модального окна c сообщением успеха из секции want-go и details
wantGoForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  openSuccessModal();
  wantGoForm.reset();
  phoneInputWantGo.style.border = '';
});
detailsForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  openSuccessModal();
  detailsForm.reset();
  phoneInputDetails.style.border = '';
});

// листенеры открытия и закрытия модальных окон
callbackOpenButton.addEventListener('click', callbackOpenButtonClickHandler);
callbackCloseButton.addEventListener('click', callbackCloseButtonClickHandler);
callbackOpenButton.addEventListener('keydown', callbackOpenButtonPressEnterHandler);
callbackCloseButton.addEventListener('keydown', callbackCloseButtonPressEnterHandler);

successModalOKButton.addEventListener('click', closeSuccessModal);
successModalCloseButton.addEventListener('click', closeSuccessModal);
successModalOKButton.addEventListener('keydown', successModalOKButtonPressEnterHandler);
successModalCloseButton.addEventListener('keydown', successModalCloseButtonPressEnterHandler);

// валидация инпута в модальном окне
var maskOptions = {
  mask: '+{7}(000)000-00-00',
  lazy: true
};
window.iMaskJS(phoneInputModal, maskOptions);
phoneInputModal.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputModal, errorMessageModal);
});

// валидация инпута в секции подробностей
window.iMaskJS(phoneInputDetails, maskOptions);
phoneInputDetails.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputDetails, errorMessageDetails);
});

// валидация инпута в секции хочу поехать
window.iMaskJS(phoneInputWantGo, maskOptions);
phoneInputWantGo.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputWantGo, errorMessageWantGo);
});


// обработка отправки формы и открытие модального окна с сообщением успеха из шапки
callbackModalForm.addEventListener('submit', function (evt) {
  closeCallbackModal();
  evt.preventDefault();
  callbackModalForm.reset();
  openSuccessModal();
});

// логика переключения слайдера отзывов
nextReviewButton.addEventListener('click', function () {
  for (var j = 0; j < reviewSlides.length; j++) {
    if (reviewSlides[j].classList.contains('reviews__item--active')) {
      if (j !== reviewSlides.length - 1) {
        reviewSlides[j].classList.remove('reviews__item--active');
        reviewSlides[j + 1].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = j + 2 + ' ';
        break;
      } else {
        reviewSlides[j].classList.remove('reviews__item--active');
        reviewSlides[0].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = 1 + ' ';
        break;
      }
    }
  }
});
previousReviewButton.addEventListener('click', function () {
  for (var j = 0; j < reviewSlides.length; j++) {
    if (reviewSlides[j].classList.contains('reviews__item--active')) {
      if (j !== 0) {
        reviewSlides[j].classList.remove('reviews__item--active');
        reviewSlides[j - 1].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = j + ' ';
        break;
      } else {
        reviewSlides[0].classList.remove('reviews__item--active');
        reviewSlides[reviewSlides.length - 1].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = reviewSlides.length + ' ';
        break;
      }
    }
  }
});

addListerersOnProgrammsButtons();
switchFaqQuestions();
addListerersOnLiveIsraelIndicators();
