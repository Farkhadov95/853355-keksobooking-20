'use strict';
(function () {
  var mapFilters = document.querySelector('.map__filters');
  var housingType = mapFilters.querySelector('#housing-type');
  var points = [];
  var type = 'palace';
  var price = 100;
  var rooms = 35;
  var guests = 93;

  window.successHandler = function (data) {
    points = data;
    window.activateFilters();
    window.filterPins();

    housingType.addEventListener('change', function () {
      var housingOption = housingType.value;
      return housingOption;
    });
  };

  window.filterPins = function () {
    var filteredHousingType = points.filter(function (it) {
      return it.offer.type === type;
    });
    var filteredHousingPrice = points.filter(function (it) {
      return it.offer.price === price;
    });
    var filteredHousingRooms = points.filter(function (it) {
      return it.offer.rooms === rooms;
    });
    var filteredHousingGuests = points.filter(function (it) {
      return it.offer.rooms === guests;
    });
    window.renderPins(filteredHousingType
    .concat(filteredHousingPrice)
    .concat(filteredHousingRooms)
    .concat(filteredHousingGuests)
    );
  };

  window.errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);

    document.addEventListener('keydown', function (ESCevt) {
      if (ESCevt.keyCode === 27) {
        node.remove();
      }
    });
  };

})();

