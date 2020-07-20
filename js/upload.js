'use strict';
(function () {
  var URL = 'https://javascript.pages.academy/keksobooking';
  var StatusCode = {
    OK: 200
  };

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        window.displayError();
      }
    });
    xhr.addEventListener('error', function () {
      window.displayError();
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
