'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var body = document.querySelector('body');

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
  if (form) {
    form.reset();
    errorMessage.style.display = 'none';
  }
};
var closeCallbackModal = function () {
  if (callbackModal) {
    phoneInputModal.style.border = '';
    phoneInputModal.value = '';
    overlay.classList.remove('modal-open');
    callbackModal.classList.remove('modal-open');
    document.removeEventListener('keydown', openCallbackModalPressEscHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    resetForm(callbackModalForm, errorMessageModal);
    body.classList.remove('fix-body');
  }
};
var openCallbackModal = function () {
  if (callbackModal) {
    overlay.classList.add('modal-open');
    callbackModal.classList.add('modal-open');
    nameInput.focus();
    document.addEventListener('keydown', openCallbackModalPressEscHandler);
    overlay.addEventListener('click', overlayClickHandler);
    body.classList.add('fix-body');
  }
};
var openCallbackModalPressEscHandler = function (evt) {
  if (callbackModal) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeCallbackModal();
    }
  }
};
var callbackOpenButtonClickHandler = function () {
  if (callbackModal) {
    openCallbackModal();
  }
};
var callbackOpenButtonPressEnterHandler = function (evt) {
  if (callbackModal) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openCallbackModal();
    }
  }
};
var callbackCloseButtonClickHandler = function () {
  if (callbackModal) {
    closeCallbackModal();
  }
};
var callbackCloseButtonPressEnterHandler = function (evt) {
  if (callbackModal) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeCallbackModal();
    }
  }
};
var openSuccessModal = function () {
  if (successModal) {
    overlay.classList.add('modal-open');
    successModal.classList.add('modal-open');
    document.addEventListener('keydown', openSuccessModalPressEscHandler);
    overlay.addEventListener('click', overlayClickHandler);
    body.classList.add('fix-body');
  }
};
var closeSuccessModal = function () {
  if (successModal) {
    overlay.classList.remove('modal-open');
    successModal.classList.remove('modal-open');
    document.removeEventListener('keydown', openSuccessModalPressEscHandler);
    overlay.removeEventListener('click', overlayClickHandler);
    body.classList.remove('fix-body');
  }
};
var openSuccessModalPressEscHandler = function (evt) {
  if (successModal) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSuccessModal();
    }
  }
};
var successModalOKButtonPressEnterHandler = function (evt) {
  if (successModal) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSuccessModal();
    }
  }
};
var successModalCloseButtonPressEnterHandler = function (evt) {
  if (successModal) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSuccessModal();
    }
  }
};
var overlayClickHandler = function (evt) {
  if (overlay) {
    if (callbackModal.classList.contains('modal-open') && evt.target === overlay) {
      closeCallbackModal();
    } else if (successModal.classList.contains('modal-open') && evt.target === overlay) {
      closeSuccessModal();
    }
  }
};

// обработчики кнопок FAQ
var removeFaqQuestionButtonActiveClass = function () {
  if (faqQuestionButtons) {
    for (var i = 0; i < faqQuestionButtons.length; i++) {
      if (faqQuestionButtons[i].classList.contains('faq__question--active')) {
        faqQuestionButtons[i].classList.remove('faq__question--active');
      }
    }
  }
};
var faqQuestionButtonClickHandler = function (evt) {
  if (faqQuestionButtons) {
    if (evt.currentTarget.classList.contains('faq__question--active')) {
      evt.currentTarget.classList.remove('faq__question--active');
    } else {
      removeFaqQuestionButtonActiveClass();
      evt.currentTarget.classList.toggle('faq__question--active');
    }
  }
};
var faqQuestionButtonPressEnterHandler = function (evt) {
  if (faqQuestionButtons) {
    if (evt.keyCode === ENTER_KEYCODE) {
      if (evt.target.classList.contains('faq__question--active')) {
        evt.target.classList.remove('faq__question--active');
      } else {
        removeFaqQuestionButtonActiveClass();
        evt.target.classList.toggle('faq__question--active');
      }
    }
  }
};

// валидация полей ввода
var validatePhoneInputHandler = function (field, errorMessage) {
  if (field) {
    if (field.value.length > 4 && field.value.length < 17) {
      field.style.border = '2px solid #ff0000';
      errorMessage.style.display = 'block';
      field.setCustomValidity('Неверный формат!');
    } else if (field.value.length <= 3 && field.value.length >= 1) {
      field.style.border = '';
      errorMessage.style.display = 'none';
      field.setCustomValidity('Введите номер телефона!');
    } else {
      field.style.border = '2px solid #484848';
      errorMessage.style.display = 'none';
      field.setCustomValidity('');
    }
  }
};

// переключение программ обучения
var deactiveateProgrammButton = function () {
  if (programmsTexts && programmsButtons) {
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
  }
};
var showActiveProgramm = function (button, buttonItem, text) {
  if (button) {
    button.addEventListener('click', function () {
      deactiveateProgrammButton();
      buttonItem.classList.add('programms__item--active');
      text.classList.add('programms__about--active');
    });
  }
};
var addListerersOnProgrammsButtons = function () {
  if (programmButtonItems) {
    for (var i = 0; i < programmButtonItems.length; i++) {
      showActiveProgramm(programmsButtons[i], programmButtonItems[i], programmsTexts[i]);
    }
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
  if (photosLiveIsrael) {
    for (var i = 0; i < photosLiveIsrael.length; i++) {
      photosLiveIsrael[i].style.display = 'none';
    }
    for (var j = 0; j < indicatorsLiveIsrael.length; j++) {
      if (indicatorsLiveIsrael[j].classList.contains('live-israel__indicator--active')) {
        indicatorsLiveIsrael[j].classList.remove('live-israel__indicator--active');
      }
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
  if (indicatorsLiveIsrael) {
    for (var i = 0; i < indicatorsLiveIsrael.length; i++) {
      showActiveSlide(indicatorsLiveIsrael[i], photosLiveIsrael[i]);
    }
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
phoneInputModal.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputModal, errorMessageModal);
});
phoneInputModal.addEventListener('focus', function () {
  validatePhoneInputHandler(phoneInputModal, errorMessageModal);
});
phoneInputModal.addEventListener('blur', function () {
  validatePhoneInputHandler(phoneInputModal, errorMessageModal);
});

// валидация инпута в секции подробностей
phoneInputDetails.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputDetails, errorMessageDetails);
});
phoneInputDetails.addEventListener('focus', function () {
  validatePhoneInputHandler(phoneInputDetails, errorMessageDetails);
});
phoneInputDetails.addEventListener('blur', function () {
  validatePhoneInputHandler(phoneInputDetails, errorMessageDetails);
});

// валидация инпута в секции хочу поехать
phoneInputWantGo.addEventListener('input', function () {
  validatePhoneInputHandler(phoneInputWantGo, errorMessageWantGo);
});
phoneInputWantGo.addEventListener('focus', function () {
  validatePhoneInputHandler(phoneInputWantGo, errorMessageWantGo);
});
phoneInputWantGo.addEventListener('blur', function () {
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
