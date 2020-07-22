'use strict';
window.movePin = function () {

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var mainAddress = adForm.querySelector('#address');
  var PIN_SHIFT_X = 31;
  var PIN_SHIFT_Y = 53;


  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.button === 0 && mainPin.dataset.isActive === 'false') {
      evt.preventDefault();
      window.activateForm();
      window.load(window.successLoadHandler, window.errorLoadHandler);
    }

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    mainAddress.value = (mainPin.offsetLeft + PIN_SHIFT_X) + ', ' + (mainPin.offsetTop + PIN_SHIFT_Y);

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var newLocation = {
        x: (mainPin.offsetLeft - shift.x),
        y: (mainPin.offsetTop - shift.y)
      };

      var intViewportWidth = window.innerWidth;

      if (newLocation.y < 77) {
        newLocation.y = 77;
      } else if (newLocation.y > 630) {
        newLocation.y = 630;
      } else if (newLocation.x < -32) {
        newLocation.x = -32;
      } else if (newLocation.x > 1168) {
        newLocation.x = 1168;
      } else if (newLocation.x > intViewportWidth) {
        newLocation.x = intViewportWidth - 55;
      }


      mainPin.style.top = newLocation.y + 'px';
      mainPin.style.left = newLocation.x + 'px';
      mainAddress.value = (mainPin.offsetLeft - shift.x + PIN_SHIFT_X) + ', ' + (mainPin.offsetTop - shift.y + PIN_SHIFT_Y);

    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  mainPin.focus();
  mainPin.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13 && mainPin.dataset.isActive === 'false') {
      evt.preventDefault();
      window.activateForm();
      window.load(window.successLoadHandler, window.errorLoadHandler);
    }
  });

};
