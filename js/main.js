'use strict';
(function () {
  var adForm = document.querySelector('.ad-form');
  var roomsQuantity = adForm.querySelector('#room_number');
  var guestQuantity = adForm.querySelector('#capacity');

  roomsQuantity.addEventListener('change', window.compareRoomsToGuests);
  guestQuantity.addEventListener('change', window.compareRoomsToGuests);
  adForm.addEventListener('submit', window.compareRoomsToGuests);

  window.movePin();
  window.deactiveteForm();
  window.displayPoints();

})();
