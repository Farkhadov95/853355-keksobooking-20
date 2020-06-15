'use strict';
(function () {
  var fragment = document.createDocumentFragment();
  var pinContainer = document.querySelector('.map__pins');
  document.querySelector('.map').classList.remove('map--faded');

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
    var SHIFT_X = '25';
    var SHIFT_Y = '70';
    var pinTemplate = document.querySelector('#pin').content;

    var pinElement = pinTemplate.cloneNode(true);
    pinElement.querySelector('.map__pin').style = 'left: ' + (point.location.x - SHIFT_X) + 'px;' + 'top: ' + (point.location.y - SHIFT_Y) + 'px; ';
    pinElement.querySelector('img').src = point.author.avatar;
    pinElement.querySelector('img').alt = point.offer.title;
    fragment.appendChild(pinElement);
  }


  function renderCards(card) {
    var map = document.querySelector('.map');

    var mapFilter = document.querySelector('.map__filters-container');
    var offerTemplate = document.querySelector('#card').content;
    var offerElement = offerTemplate.cloneNode(true);

    var popupTitle = offerElement.querySelector('.popup__title');
    popupTitle.textContent = card.offer.title;

    var popupAddress = offerElement.querySelector('.popup__text--address');
    popupAddress.textContent = card.offer.address;

    var popupPrice = offerElement.querySelector('.popup__text--price');
    popupPrice.textContent = card.offer.price + ' ₽/ночь';

    var popupType = offerElement.querySelector('.popup__type');
    popupType.textContent = translateType(card.offer.type);

    var popupCapacity = offerElement.querySelector('.popup__text--capacity');
    popupCapacity.textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests;

    var popupTime = offerElement.querySelector('.popup__text--time');
    popupTime.textContent = 'Заезд после ' + card.offer.checkin + ', выезд до' + card.offer.checkout;

    var popupFeatures = offerElement.querySelector('.popup__features');
    popupFeatures.textContent = card.offer.features;

    var popupDescription = offerElement.querySelector('.popup__description');
    popupDescription.textContent = card.offer.description;

    var popupPhotos = offerElement.querySelector('.popup__photos');
    var popupPhoto = popupPhotos.querySelector('.popup__photo');
    popupPhoto.src = card.offer.photos;

    var popupAvatar = offerElement.querySelector('.popup__avatar');
    popupAvatar.src = card.author.avatar;
    map.insertBefore(offerElement, mapFilter);
  }

  function translateType(word) {
    switch (word) {
      case 'palace': word = 'Дворец';
        break;
      case 'flat': word = 'Квартира';
        break;
      case 'house': word = 'Дом';
        break;
      case 'bungalo': word = 'Бунгало';
        break;
    }
    return word;
  }

  function getCorrectAddressX(element) {
    var CorrectAddressX = element - 25;
    return CorrectAddressX;
  }

  function getCorrectAddressY(element) {
    var CorrectAddressY = element - 70;
    return CorrectAddressY;
  }


  function displayPoints() {
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
      renderCards(pinPoint);
    }
    pinContainer.appendChild(fragment);
  }

  displayPoints();

})();
