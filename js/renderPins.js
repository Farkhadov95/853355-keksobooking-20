'use strict';
(function () {
  var pinContainer = document.querySelector('.map__pins');

  window.renderPins = function (filteredPoints) {
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;
    var fragment = document.createDocumentFragment();
    var MAX_LENGTH = 5;
    pinContainer.innerHTML = '';
    for (var i = 0; (i < filteredPoints.length) && (i < MAX_LENGTH); i++) {
      var pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector('.map__pin').style = 'left: ' + (filteredPoints[i].location.x - SHIFT_X) + 'px;' + 'top: ' + (filteredPoints[i].location.y - SHIFT_Y) + 'px; ';
      pinElement.querySelector('.map__pin').style = 'left: ' + (filteredPoints[i].location.x - SHIFT_X) + 'px;' + 'top: ' + (filteredPoints[i].location.y - SHIFT_Y) + 'px; ';
      pinElement.querySelector('img').src = filteredPoints[i].author.avatar;
      pinElement.querySelector('img').alt = filteredPoints[i].offer.title;
      // pinElement.addEventListener('click', function () {
      //   window.renderCards(filteredPoints[i]);
      // });
      fragment.appendChild(pinElement);
    }
    pinContainer.appendChild(fragment);
  };
  // var clickHandler = function (e) {
  //   // window.renderCards(points[1]);
  //   // pinContainer.indexOf(e.target);
  //   console.log(e.target);
  // };


  // pinContainer.addEventListener('click', function (e) {

  //   if (e.target === 'map__pin' && e.target !== 'map__pin--main') {
  //     console.log(e.target);
  //   } else {
  //     console.log('Это не кнопка!');
  //   }
  // });


  // var availablePins = pinContainer.querySelectorAll('.map__pin');
  // availablePins.addEventListener('click', function () {
  //   console.log('1111');
  // });


})();
