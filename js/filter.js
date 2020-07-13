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
      // ////////////////////////////////////////////////
    }
    window.filterPins(housingType, housingPrice, housingRoom, housingGuest);
  });

  window.filterPins = function (UpdatedType, UpdatedPrice, UpdatedRooms, UpdatedGuests) {
    var filteredHousingType = window.points.filter(function (it) {
      if (UpdatedType === 'palace') {
        // console.log('palace!');
        return it.offer.type === UpdatedType;
      } else if (UpdatedType === 'flat') {
        // console.log('flat!');
        return it.offer.type === UpdatedType;
      } else if (UpdatedType === 'house') {
        // console.log('house!');
        return it.offer.type === UpdatedType;
      } else if (UpdatedType === 'bungalo') {
        // console.log('bungalo!');
        return it.offer.type === UpdatedType;
      } else {
        // console.log('All Types');
        return it.offer.type;
      }
    });
    var filteredHousingPrice = filteredHousingType.filter(function (it) {
      if (UpdatedPrice === 'low') {
        // console.log('low!');
        return it.offer.price > 0 && it.offer.price <= 10000;
      } else if (UpdatedPrice === 'middle') {
        // console.log('middle!');
        return it.offer.price > 10000 && it.offer.price <= 50000;
      } else if (UpdatedPrice === 'high') {
        // console.log('high!');
        return it.offer.price > 50000;
      } else {
        // console.log('All Prices!');
        return it.offer.price >= 0;
      }
    });
    var filteredHousingRooms = filteredHousingPrice.filter(function (it) {
      if (UpdatedRooms === 'rooms-1') {
        // console.log('1');
        return it.offer.rooms === 1;
      } else if (UpdatedRooms === 'rooms-2') {
        // console.log('2');
        return it.offer.rooms === 2;
      } else if (UpdatedRooms === 'rooms-3') {
        // console.log('3');
        return it.offer.rooms === 3;
      } else {
        // console.log('All Rooms!');
        return it.offer.rooms >= 0;
      }
    });
    var filteredHousingGuests = filteredHousingRooms.filter(function (it) {
      if (UpdatedGuests === 'guests-0') {
        // console.log('0');
        return it.offer.guests === 0;
      } else if (UpdatedGuests === 'guests-1') {
        // console.log('1');
        return it.offer.guests === 1;
      } else if (UpdatedGuests === 'guests-2') {
        // console.log('2');
        return it.offer.guests === 2;
      } else {
        // console.log('All Guests!');
        return it.offer.guests > 0;
      }
    });

    var filteredMix = filteredHousingGuests;

    var uniquePins = filteredMix.filter(function (it, i) {
      return filteredMix.indexOf(it) === i;
    });
    window.renderPins(uniquePins);

    // for (var k = 0; k < uniquePins.length; k++) {
    //   window.renderCards(uniquePins[k]);
    // }

  };
})();
