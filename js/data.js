'use strict';
(function () {
  var pinContainer = document.querySelector('.map__pins');
  var MAX_PIN = 8;

  window.renderPins = function (point) {
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = 'left: ' + (point.location.x - SHIFT_X) + 'px;' + 'top: ' + (point.location.y - SHIFT_Y) + 'px; ';
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    return pinElement;
  };

  window.successHandler = function (points) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_PIN; i++) {
      fragment.appendChild(window.renderPins(points[i]));
    }
    pinContainer.appendChild(fragment);
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
  };

})();

