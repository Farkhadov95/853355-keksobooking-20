'use strict';
(function () {
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

  // function getRandomLocation() {
  //   var pinPosition = 'left: ' + getRandomIntInclusive(100, 1100) + 'px; ' + ' top: ' + getRandomIntInclusive(130, 630) + 'px';
  //   return pinPosition;
  // }


  var renderPins = function (point) {
    var pinContainer = document.querySelector('.map__pins');
    var pinTemplate = document.querySelector('#pin').content;
    var mapPin = pinTemplate.querySelector('.map__pin');
    var imgPin = pinTemplate.querySelector('img');

    pinTemplate.cloneNode(true);
    mapPin.style = point.location.left + point.location.top;
    imgPin.src = point.author.avatar;
    pinContainer.appendChild(pinTemplate);
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
})();


// ----------------------------------------------------------

//   generatePins(pinsQuant) -> pinsArray =[pin1, pin2, ...]
//   renderPins(pinsArray, container) {
//   create doc.fragment

//   pinsArray.forEach(function(pin, index, array) {

//   })
//   for (let index = 0; index < pinsArray.length; index++) {
//     clone template;
//     ? find btn in template
//     btn.style.left = pin.location.x

//     const pin = pinsArray[index];
//     img. src = pin.author.avatar

//     doc.fragment <- button
//   }

//   container <- fragment
// }
