'use strict';
(function () {
  window.points = [];
  var housingType = 'types-any';
  var housingPrice = 'prices-any';
  var housingRoom = 'rooms-any';
  var housingGuest = 'guests-any';

  // var pinContainer = document.querySelector('.map__pins');
  // var allPins = pinContainer.children;
  // var showCard = function () {
  //   for (var k = 0; k < allPins.length; k++) {
  //     allPins[k].addEventListener('click', function (evt) {
  //       console.log(evt.target);
  //     });
  //   }
  // };


  window.successHandler = function (data) {
    window.points = data;
    window.activateFilters();
    window.filterPins(housingType, housingPrice, housingRoom, housingGuest);
    // showCard();
    // console.log(allPins);
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
