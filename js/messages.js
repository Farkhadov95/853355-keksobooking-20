'use strict';
(function () {
  var mainSection = document.querySelector('main');
  var adForm = document.querySelector('.ad-form');

  window.displaySuccess = function () {
    window.compareRoomsToGuests();
    var successPopup = document.querySelector('#success').content;
    var successNotification = successPopup.cloneNode(true);
    mainSection.appendChild(successNotification);
    var successNotificationBlock = document.querySelector('.success');
    if (successNotificationBlock) {
      document.addEventListener('keydown', function (evtKey) {
        if (evtKey.keyCode === 27) {
          successNotificationBlock.remove();
          window.deactiveteForm();
          adForm.reset();
        } else if (evtKey.keyCode === 13) {
          successNotificationBlock.remove();
          window.deactiveteForm();
          adForm.reset();
        }
      });
      document.addEventListener('click', function () {
        successNotificationBlock.remove();
      });
    }
  };

  window.displayError = function () {
    var errorTemplate = document.querySelector('#error').content;
    var errorNotification = errorTemplate.cloneNode(true);
    mainSection.appendChild(errorNotification);
    var errorNotificationBlock = document.querySelector('.error');
    var errorTryButton = errorNotificationBlock.querySelector('.error__button');
    if (errorNotificationBlock) {
      errorTryButton.focus();
      document.addEventListener('keydown', function (evtKey) {
        if (evtKey.keyCode === 27) {
          errorNotificationBlock.remove();
        }
      });
      document.addEventListener('click', function () {
        errorNotificationBlock.remove();
      });
      errorTryButton.addEventListener('click', function () {
        errorNotificationBlock.remove();
      });
      errorTryButton.addEventListener('keydown', function (evtTry) {
        if (evtTry.keyCode === 13) {
          errorNotificationBlock.remove();
        }
      });
    }
  };

})();
