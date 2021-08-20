(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}((function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  if (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) {
    document.querySelector('h1').textContent = 'Working!';
  }

  var sayHi = function sayHi(name) {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve("Hi ".concat(name, "!"));
      }, 500);
    });
  };

  var addToUl = function addToUl(text) {
    var li = document.createElement('li');
    li.textContent = text;
    document.querySelector('ul').appendChild(li);
  };

  sayHi('Kaleb').then(function (response) {
    addToUl(response);
  });
  sayHi('Travis').then(function (response) {
    addToUl(response);
  });
  sayHi('Jason').then(function (response) {
    addToUl(response);
  });

})));
