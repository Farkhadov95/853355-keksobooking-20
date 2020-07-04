'use strict';
(function () {
  var pinContainer = document.querySelector('.map__pins');

  window.renderPins = function (points) {
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;
    var fragment = document.createDocumentFragment();
    var MAX_LENGTH = 5;
    for (var i = 0; (i < points.length) && (i < MAX_LENGTH); i++) {
      var pinElement = pinTemplate.cloneNode(true);
      pinElement.querySelector('.map__pin').style = 'left: ' + (points[i].location.x - SHIFT_X) + 'px;' + 'top: ' + (points[i].location.y - SHIFT_Y) + 'px; ';
      pinElement.querySelector('.map__pin').style = 'left: ' + (points[i].location.x - SHIFT_X) + 'px;' + 'top: ' + (points[i].location.y - SHIFT_Y) + 'px; ';
      pinElement.querySelector('img').src = points[i].author.avatar;
      pinElement.querySelector('img').alt = points[i].offer.title;

      pinElement.addEventListener('click', window.renderCards(points[i]));
      fragment.appendChild(pinElement);
    }
    pinContainer.appendChild(fragment);
  };
})();
