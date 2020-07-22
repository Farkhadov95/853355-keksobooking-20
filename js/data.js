'use strict';
(function () {
  window.points = [];
  var housingType = 'types-any';
  var housingPrice = 'prices-any';
  var housingRoom = 'rooms-any';
  var housingGuest = 'guests-any';
  var featureWifi = false;
  var featureDishwasher = false;
  var featureParking = false;
  var featureWasher = false;
  var featureElevator = false;
  var featureConditioner = false;

  window.successLoadHandler = function (data) {
    window.points = data;
    window.points.forEach(function (p, ind) {
      p.id = ind;
    });
    window.activateFilters();
    window.filterPins(housingType, housingPrice, housingRoom, housingGuest, featureWifi, featureDishwasher, featureParking, featureWasher, featureElevator, featureConditioner);
  };

  window.errorLoadHandler = function (errorMessage) {
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
