'use strict';
(function () {
  var mainSection = document.querySelector('main');
  var adForm = document.querySelector('.ad-form');

  window.displaySuccessUpload = function () {
    window.compareRoomsToGuests();
    var successPopup = document.querySelector('#success').content;
    var successNotification = successPopup.cloneNode(true);
    mainSection.appendChild(successNotification);
    var successNotificationBlock = document.querySelector('.success');

    var clearAll = function () {
      successNotificationBlock.remove();
      window.deactivateForm();
      adForm.reset();
    };

    if (successNotificationBlock) {
      document.addEventListener('keydown', function (evtKey) {
        if (evtKey.keyCode === 27 || evtKey.keyCode === 13) {
          clearAll();
        }
      }, {once: true});

      successNotificationBlock.addEventListener('click', function () {
        clearAll();
      });
    }
  };

  window.displayErrorUpload = function () {
    var errorTemplate = document.querySelector('#error').content;
    var errorNotification = errorTemplate.cloneNode(true);
    mainSection.appendChild(errorNotification);
    var errorNotificationBlock = document.querySelector('.error');
    var errorTryButton = errorNotificationBlock.querySelector('.error__button');
    if (errorNotificationBlock) {
      errorTryButton.focus();
      errorNotificationBlock.addEventListener('click', function () {
        errorNotificationBlock.remove();
      });
      errorTryButton.addEventListener('click', function () {
        errorNotificationBlock.remove();
      });
      errorTryButton.addEventListener('keydown', function (evtTry) {
        if (evtTry.keyCode === 27 || evtTry.keyCode === 13) {
          errorNotificationBlock.remove();
        }
      });
    }
  };

})();
