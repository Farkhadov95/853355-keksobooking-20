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
  var map = document.querySelector('.map');
  var pinContainer = document.querySelector('.map__container');
  var mapFiltersArray = mapFilters.querySelectorAll('select');
  var adSelectsArray = adForm.querySelectorAll('select');
  var adSelectType = adForm.querySelector('#type');
  var priceInput = adForm.querySelector('#price');
  var roomsQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');
  var typeInput = adForm.querySelector('#type');
  var successPopup = document.querySelector('#success').content;
  var mainSection = document.querySelector('main');

  var disableAll = function (elements, status) {
    for (var i = 0; i < elements.length; i++) {
      elements[i].disabled = status;
    }
  };

  window.deactiveteForm = function () {
    map.classList.add('map--faded');
    adForm.classList.add('ad-form--disabled');
    pinContainer.innerHTML = '';
    housingFeatures.disabled = true;
    adFormHeader.disabled = true;
    disableAll(adFormElements, true);
    disableAll(mapFiltersSet, true);
    window.closeCardAuto();
    mainAddress.value = mainPin.offsetLeft + ', ' + mainPin.offsetTop;

    mapFiltersArray.forEach(function (item) {
      item.selectedIndex = '0';
    });
    adSelectsArray.forEach(function (item) {
      item.selectedIndex = '0';
    });
    adSelectType.selectedIndex = '1';
    priceInput.placeholder = '1000';
  };

  window.activateForm = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    housingFeatures.disabled = false;
    adFormHeader.disabled = false;
    disableAll(adFormElements, false);
  };

  window.activateFilters = function () {
    disableAll(mapFiltersSet, false);
  };

  window.compareRoomsToGuests = function () {
    if (roomsQuantity.value < guestQuantity.value) {
      roomsQuantity.setCustomValidity('Количество комнат не достаточно для данного количества гостей');
      roomsQuantity.reportValidity();
    } else {
      roomsQuantity.setCustomValidity('');
    }
  };

  typeInput.addEventListener('change', function (evt) {
    minPriceOnHousingType(evt.target.value);
  });

  var minPriceOnHousingType = function (type) {
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

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    if (roomsQuantity.value < guestQuantity.value) {
      roomsQuantity.setCustomValidity('Количество комнат не достаточно для данного количества гостей');
      roomsQuantity.reportValidity();
    } else {
      roomsQuantity.setCustomValidity('');
      window.compareRoomsToGuests();
      var successNotification = successPopup.cloneNode(true);
      mainSection.appendChild(successNotification);

      var successNotificationBlock = document.querySelector('.success');
      if (successNotificationBlock) {
        document.addEventListener('keydown', function (evtKey) {
          if (evtKey.keyCode === 27) {
            successNotificationBlock.remove();
            window.deactiveteForm();
            adForm.reset();
          }
        });
      }
    }
  });

  var timeIn = adForm.querySelector('#timein');
  var timeOut = adForm.querySelector('#timeout');
  var syncInAndOut = function (changeWhat, syncWhat) {
    changeWhat.addEventListener('change', function (evt) {
      syncWhat.value = evt.target.value;
    });
  };

  syncInAndOut(timeIn, timeOut);
  syncInAndOut(timeOut, timeIn);


  var resetButton = adForm.querySelector('.ad-form__reset');
  resetButton.addEventListener('click', function () {
    window.deactiveteForm();
    adForm.reset();
  });

})();
