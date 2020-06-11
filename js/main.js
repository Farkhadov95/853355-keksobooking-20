'use strict';
(function () {
  var fragment = document.createDocumentFragment();
  var pinContainer = document.querySelector('.map__pins');

  function showMap() {
    var map = document.querySelector('.map');
    map.classList.remove('map--faded');
  }
  showMap();

  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function getRandomImg() {
    var imgLink = 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png';
    return imgLink;
  }

  function getRandomPhoto() {
    var photoLink = 'http://o0.github.io/assets/images/tokyo/hotel' + getRandomIntInclusive(1, 3) + '.jpg';
    return photoLink;
  }

  function getRandomElement(item) {
    var randomElement = item[Math.floor(Math.random() * item.length)];
    return randomElement;
  }

  function renderPins(point) {
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = point.location.left + point.location.top;
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    fragment.appendChild(pinElement);
  }

  function displayPoints() {
    var TYPES = ['palace', 'flat', 'house', 'bungalo'];
    var TIME_LIST = ['12:00', '13:00', '14:00'];
    var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var PHRASE_MIX = ['с красивым видом', 'с большой кухней', 'в центре Токио', 'рядом с метро', 'со всеми удобствами', 'на тихой улице'];
    var SHIFT_X = '25';

    for (var i = 0; i < 8; i++) {
      var pinPoint = {
        author: {
          avatar: getRandomImg(),
        },
        offer: {
          title: 'Квартира ' + getRandomElement(PHRASE_MIX),
          address: location.left + location.top,
          price: getRandomIntInclusive(25, 250),
          type: getRandomElement(TYPES),
          rooms: getRandomIntInclusive(1, 4),
          guests: getRandomIntInclusive(1, 4),
          checkin: getRandomElement(TIME_LIST),
          checkout: getRandomElement(TIME_LIST),
          features: getRandomElement(FEATURES),
          description: getRandomElement(PHRASE_MIX) + ', ' + getRandomElement(PHRASE_MIX),
          photos: getRandomPhoto()
        },
        location: {
          left: 'left: ' + (getRandomIntInclusive(25, 1175) - SHIFT_X) + 'px; ',
          top: ' top: ' + getRandomIntInclusive(60, 630) + 'px'
        }
      };
      renderPins(pinPoint);
    }
    pinContainer.appendChild(fragment);
  }

  displayPoints();

})();
