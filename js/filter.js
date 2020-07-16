'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingTypes = ['types-any', 'palace', 'flat', 'house', 'bungalo'];
  var housingPrices = ['prices-any', 'middle', 'low', 'high'];
  var housingRooms = ['rooms-any', 'rooms-1', 'rooms-2', 'rooms-3'];
  var housingGuests = ['guests-any', 'guests-1', 'guests-2', 'guests-0'];
  var housingType = 'types-any';
  var housingPrice = 'prices-any';
  var housingRoom = 'rooms-any';
  var housingGuest = 'guests-any';

  mapFilters.addEventListener('change', function (evt) {
    if (housingTypes.includes(evt.target.value)) {
      housingType = evt.target.value;
    } else if (housingPrices.includes(evt.target.value)) {
      housingPrice = evt.target.value;
    } else if (housingRooms.includes(evt.target.value)) {
      housingRoom = evt.target.value;
    } else if (housingGuests.includes(evt.target.value)) {
      housingGuest = evt.target.value;
    }
    window.closeCardAuto();
    window.filterPins(housingType, housingPrice, housingRoom, housingGuest);

  });

  window.filterPins = function (requiredType, requiredPrice, requiredRooms, requiredGuests) {
    var filteredHousingType = window.points.filter(function (it) {
      if (requiredType === 'types-any') {
        return it.offer.type;
      } else {
        return it.offer.type === requiredType;
      }
    });

    var filteredHousingPrice = filteredHousingType.filter(function (it) {
      if (requiredPrice === 'low') {
        return it.offer.price > 0 && it.offer.price <= 10000;
      } else if (requiredPrice === 'middle') {
        return it.offer.price > 10000 && it.offer.price <= 50000;
      } else if (requiredPrice === 'high') {
        return it.offer.price > 50000;
      } else {
        return it.offer.price >= 0;
      }
    });
    var filteredHousingRooms = filteredHousingPrice.filter(function (it) {
      if (requiredRooms === 'rooms-1') {
        return it.offer.rooms === 1;
      } else if (requiredRooms === 'rooms-2') {
        return it.offer.rooms === 2;
      } else if (requiredRooms === 'rooms-3') {
        return it.offer.rooms === 3;
      } else {
        return it.offer.rooms >= 0;
      }
    });
    var filteredHousingGuests = filteredHousingRooms.filter(function (it) {
      if (requiredGuests === 'guests-0') {
        return it.offer.guests === 0;
      } else if (requiredGuests === 'guests-1') {
        return it.offer.guests === 1;
      } else if (requiredGuests === 'guests-2') {
        return it.offer.guests === 2;
      } else {
        return it.offer.guests > 0;
      }
    });

    var filteredMix = filteredHousingGuests;

    var uniquePins = filteredMix.filter(function (it, i) {
      return filteredMix.indexOf(it) === i;
    });
    window.renderPins(uniquePins);

  };
})();
