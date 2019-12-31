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
var form = callbackModal.querySelector('form');
var wantGoCallbackButton = document.querySelector('.want-go__callback-button');
var detailsCallbackButton = document.querySelector('.details__callback-button');
var firstQuestionButton = document.querySelector('.faq__question--first');
var secondQuestionButton = document.querySelector('.faq__question--second');
var thirdQuestionButton = document.querySelector('.faq__question--third');
var fourthQuestionButton = document.querySelector('.faq__question--fourth');
var fifthQuestionButton = document.querySelector('.faq__question--fifth');
var sixthQuestionButton = document.querySelector('.faq__question--sixth');
var reviewSlides = document.querySelectorAll('.reviews__item');
var nextReviewButton = document.querySelector('.reviews__next-review');
var currentReviewCount = document.querySelector('.reviews__start-review');
var previousReviewButton = document.querySelector('.reviews__previous-review');

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

var phoneInputModal = document.getElementById('modal-order-callback__phone-input-field');
var phoneInputDetails = document.getElementById('details__phone-input-field');
var phoneInputWantGo = document.getElementById('want-go__phone-input-field');
var errorMessageWantGo = document.querySelector('.want-go__error-message');
var errorMessageDetails = document.querySelector('.details__error-message');
var errorMessageModal = document.querySelector('.modal-order-callback__error-message');

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

var validatePhoneInputHandler = function (field, message) {
  if (field.value.length > 0 && field.value.length < 16) {
    field.style.border = '2px solid #ff0000';
    message.style.display = 'block';
  } else if (field.value.length === 0) {
    field.style.border = '2px solid #e3e3e3';
    message.style.display = 'none';
  } else {
    field.style.border = '2px solid #484848';
    message.style.display = 'none';
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

form.addEventListener('submit', function (evt) {
  closeCallbackModal();
  evt.preventDefault();
  openSuccessModal();
  // TODO: проблема с отправкой формы, окно с успешным сообщением открывается, но сразу же закрывается, пока просто отключил действие по умолчанию.
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

// логика открытия и закрытия частых вопросов
firstQuestionButton.addEventListener('click', function () {
  firstQuestionButton.classList.toggle('faq__question--active');
});
firstQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    firstQuestionButton.classList.toggle('faq__question--active');
  }
});

secondQuestionButton.addEventListener('click', function () {
  secondQuestionButton.classList.toggle('faq__question--active');
});
secondQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    secondQuestionButton.classList.toggle('faq__question--active');
  }
});

thirdQuestionButton.addEventListener('click', function () {
  thirdQuestionButton.classList.toggle('faq__question--active');
});
thirdQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    thirdQuestionButton.classList.toggle('faq__question--active');
  }
});

fourthQuestionButton.addEventListener('click', function () {
  fourthQuestionButton.classList.toggle('faq__question--active');
});
fourthQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    fourthQuestionButton.classList.toggle('faq__question--active');
  }
});

fifthQuestionButton.addEventListener('click', function () {
  fifthQuestionButton.classList.toggle('faq__question--active');
});
fifthQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    fifthQuestionButton.classList.toggle('faq__question--active');
  }
});

sixthQuestionButton.addEventListener('click', function () {
  sixthQuestionButton.classList.toggle('faq__question--active');
});
sixthQuestionButton.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    sixthQuestionButton.classList.toggle('faq__question--active');
  }
});


// логика переключения слайдера отзывов
nextReviewButton.addEventListener('click', function () {
  for (var i = 0; i < reviewSlides.length; i++) {
    if (reviewSlides[i].classList.contains('reviews__item--active')) {
      if (i !== reviewSlides.length - 1) {
        reviewSlides[i].classList.remove('reviews__item--active');
        reviewSlides[i + 1].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = i + 2 + ' ';
        break;
      } else {
        reviewSlides[i].classList.remove('reviews__item--active');
        reviewSlides[0].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = 1 + ' ';
        break;
      }
    }
  }
});
previousReviewButton.addEventListener('click', function () {
  for (var i = 0; i < reviewSlides.length; i++) {
    if (reviewSlides[i].classList.contains('reviews__item--active')) {
      if (i !== 0) {
        reviewSlides[i].classList.remove('reviews__item--active');
        reviewSlides[i - 1].classList.add('reviews__item--active');
        currentReviewCount.innerHTML = i + ' ';
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

// открытие модального окна из секции want-go и details
wantGoCallbackButton.addEventListener('click', openSuccessModal);
detailsCallbackButton.addEventListener('click', openSuccessModal);


// валидация инпута в модальном окне
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
