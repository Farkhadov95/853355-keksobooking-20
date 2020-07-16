'use strict';
(function () {
  var mainPin = document.querySelector('.map__pin--main');
  var adForm = document.querySelector('.ad-form');
  var mapFilters = document.querySelector('.map__filters');
  var housingFeatures = mapFilters.querySelector('#housing-features');
  var adFormHeader = adForm.querySelector('.ad-form-header');
  var adFormElements = adForm.querySelectorAll('.ad-form__element');
  var mapFiltersSet = mapFilters.querySelectorAll('select');
  var mainAddress = adForm.querySelector('#address');

  var disableAll = function (elements, status) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = status;
    }
  };

  window.deactiveteForm = function () {
    housingFeatures.disabled = true;
    adFormHeader.disabled = true;
    disableAll(adFormElements, true);
    disableAll(mapFiltersSet, true);
    mainAddress.value = mainPin.offsetLeft + ', ' + mainPin.offsetTop;
  };

  window.activateForm = function () {
    document.querySelector('.map').classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    housingFeatures.disabled = false;
    adFormHeader.disabled = false;
    disableAll(adFormElements, false);
  };

  window.activateFilters = function () {
    disableAll(mapFiltersSet, false);
  };

  var roomsQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');

  window.compareRoomsToGuests = function (evt) {
    if (roomsQuantity.value < guestQuantity.value) {
      evt.preventDefault();
      roomsQuantity.setCustomValidity('Количество комнат не достаточно для данного количества гостей');
      roomsQuantity.reportValidity();
    } else {
      roomsQuantity.setCustomValidity('');
    }
  };


  var typeInput = adForm.querySelector('#type');
  typeInput.addEventListener('change', function (evt) {
    minPriceOnHousingType(evt.target.value);
  });


  var minPriceOnHousingType = function (type) {
    var priceInput = adForm.querySelector('#price');
    switch (type) {
      case 'bungalo':
        priceInput.min = 0;
        priceInput.placeholder = 0;
        break;
      case 'flat':
        priceInput.min = 1000;
        priceInput.placeholder = 1000;
        break;
      case 'house':
        priceInput.min = 5000;
        priceInput.placeholder = 5000;
        break;
      case 'palace':
        priceInput.min = 10000;
        priceInput.placeholder = 10000;
        break;
    }
  };

  var timeIn = adForm.querySelector('#timein');
  var timeOut = adForm.querySelector('#timeout');
  var syncInAndOut = function (changeWhat, syncWhat) {
    changeWhat.addEventListener('change', function (evt) {
      syncWhat.value = evt.target.value;
    });
  };

  syncInAndOut(timeIn, timeOut);
  syncInAndOut(timeOut, timeIn);


})();
