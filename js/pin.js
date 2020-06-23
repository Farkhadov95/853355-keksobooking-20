'use strict';
window.movePin = function () {

  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var mainAddress = adForm.querySelector('#address');
  var PIN_SHIFT_X = 31;
  var PIN_SHIFT_Y = 53;

  mainPin.addEventListener('mousedown', function (evt) {
    if (evt.button === 0) {
      evt.preventDefault();
      window.activateForm();
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

      mainPin.style.top = (mainPin.offsetTop - shift.y) + 'px';
      mainPin.style.left = (mainPin.offsetLeft - shift.x) + 'px';
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

  mainPin.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      evt.preventDefault();
      window.activateForm();
    }
  });

};
