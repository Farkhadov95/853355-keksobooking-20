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

  var renderPins = function (point) {
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = point.location.left + point.location.top;
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    fragment.appendChild(pinElement);
  };

  var displayPoints = function () {
    for (var i = 0; i < 8; i++) {
      var pinPoint = {
        author: {
          avatar: getRandomImg(),
        },
        offer: {
          title: 'Какой то заголовок',
          address: '600, 350',
          price: '100',
          type: 'flat',
          rooms: '4',
          guests: '4',
          checkin: '12:00',
          checkout: '13:00',
          features: 'dishwasher',
          description: 'Красиво',
          photos: 'http://o0.github.io/assets/images/tokyo/hotel1.jpg'
        },
        location: {
          left: 'left: ' + getRandomIntInclusive(50, 1150) + 'px; ',
          top: ' top: ' + getRandomIntInclusive(130, 630) + 'px'
        }
      };
      renderPins(pinPoint);
    }
  };
  displayPoints();
  pinContainer.appendChild(fragment);
})();
