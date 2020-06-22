'use strict';
(function () {
  var fragment = document.createDocumentFragment();
  var pinContainer = document.querySelector('.map__pins');

  var getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var getRandomImg = function () {
    var imgLink = 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png';
    return imgLink;
  };

  var getRandomPhoto = function () {
    var photoLink = 'http://o0.github.io/assets/images/tokyo/hotel' + getRandomIntInclusive(1, 3) + '.jpg';
    return photoLink;
  };

  var getRandomElement = function (item) {
    var randomElement = item[Math.floor(Math.random() * item.length)];
    return randomElement;
  };

  var renderPins = function (point) {
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = 'left: ' + (point.location.x - SHIFT_X) + 'px;' + 'top: ' + (point.location.y - SHIFT_Y) + 'px; ';
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    fragment.appendChild(pinElement);
  };

  var getCorrectAddressX = function (element) {
    var CorrectAddressX = element - 25;
    return CorrectAddressX;
  };

  var getCorrectAddressY = function (element) {
    var CorrectAddressY = element - 70;
    return CorrectAddressY;
  };


  window.displayPoints = function () {
    var TYPES = ['palace', 'flat', 'house', 'bungalo'];
    var TIME_LIST = ['12:00', '13:00', '14:00'];
    var FEATURES = [' wifi', ' dishwasher', ' parking', ' washer', ' elevator', ' conditioner'];
    var PHRASE_MIX = ['Красивый вид', 'Большая кухня', 'В центре Токио', 'Рядом с метро', 'Со всеми удобствами', 'На тихой улице'];


    for (var i = 0; i < 8; i++) {
      var locationX = getRandomIntInclusive(25, 1175);
      var locationY = getRandomIntInclusive(130, 630);
      var trueAddressX = getCorrectAddressX(locationX);
      var trueAddressY = getCorrectAddressY(locationY);

      var pinPoint = {
        author: {
          avatar: getRandomImg(),
        },
        offer: {
          title: getRandomElement(PHRASE_MIX),
          address: trueAddressX + ', ' + trueAddressY,
          price: getRandomIntInclusive(25, 10000),
          type: getRandomElement(TYPES),
          rooms: getRandomIntInclusive(2, 4),
          guests: getRandomIntInclusive(2, 4),
          checkin: getRandomElement(TIME_LIST),
          checkout: getRandomElement(TIME_LIST),
          features: FEATURES,
          description: getRandomElement(PHRASE_MIX) + ', ' + getRandomElement(PHRASE_MIX),
          photos: getRandomPhoto()
        },
        location: {
          x: locationX,
          y: locationY
        }
      };

      renderPins(pinPoint);
      window.renderCards(pinPoint);
    }
    pinContainer.appendChild(fragment);
  };

})();

