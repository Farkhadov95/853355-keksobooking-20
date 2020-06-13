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

  // function getRandomLocation(placement, shift, min, max) {
  //   var randomLocation = placement + (getRandomIntInclusive(min, max) - shift) + 'px; ';
  //   return randomLocation;
  // }

  function getRandomElement(item) {
    var randomElement = item[Math.floor(Math.random() * item.length)];
    return randomElement;
  }

  function renderPins(point) {
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = 'left: ' + (point.location.x - SHIFT_X) + 'px;' + 'top: ' + (point.location.y - SHIFT_Y) + 'px; ';
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    fragment.appendChild(pinElement);
  }

  function displayPoints() {
    var TYPES = ['palace', 'flat', 'house', 'bungalo'];
    var TIME_LIST = ['12:00', '13:00', '14:00'];
    var FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var PHRASE_MIX = ['Квартира с красивым видом', 'Квартира с большой кухней', 'Квартира в центре Токио', 'Квартира рядом с метро', 'Квартира со всеми удобствами', 'Квартира на тихой улице'];


    for (var i = 0; i < 8; i++) {
      var pinPoint = {
        author: {
          avatar: getRandomImg(),
        },
        offer: {
          title: getRandomElement(PHRASE_MIX),
          address: location.x + location.y,
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
          x: getRandomIntInclusive(25, 1175),
          y: getRandomIntInclusive(130, 630)
        }
      };
      renderPins(pinPoint);
    }
    pinContainer.appendChild(fragment);
  }

  displayPoints();

})();
