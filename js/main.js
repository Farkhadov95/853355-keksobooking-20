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
    var types = ['palace', 'flat', 'house', 'bungalo'];
    var timeList = ['12:00', '13:00', '14:00'];
    var features = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
    var photos = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
    var pharaseMix = ['с красивым видом', 'с большой кухней', 'в центре Токио', 'рядом с метро', 'со всеми удобствами', 'на тихой улице'];

    for (var i = 0; i < 8; i++) {
      var pinPoint = {
        author: {
          avatar: getRandomImg(),
        },
        offer: {
          title: 'Квартира ' + getRandomElement(pharaseMix),
          address: getRandomIntInclusive(0, 1150) + ', ' + getRandomIntInclusive(60, 630),
          price: getRandomIntInclusive(25, 250),
          type: getRandomElement(types),
          rooms: getRandomIntInclusive(1, 4),
          guests: getRandomIntInclusive(1, 4),
          checkin: getRandomElement(timeList),
          checkout: getRandomElement(timeList),
          features: getRandomElement(features),
          description: getRandomElement(pharaseMix) + ', ' + getRandomElement(pharaseMix),
          photos: getRandomElement(photos)
        },
        location: {
          left: 'left: ' + getRandomIntInclusive(25, 1175) + 'px; ',
          top: ' top: ' + getRandomIntInclusive(60, 630) + 'px'
        }
      };
      renderPins(pinPoint);
    }
    pinContainer.appendChild(fragment);
  }

  displayPoints();

})();
