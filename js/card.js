'use strict';
(function () {
  window.renderCards = function (card) {
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
  };

  var translateType = function (word) {
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
  };

})();
