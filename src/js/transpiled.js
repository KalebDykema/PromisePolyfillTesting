import "core-js/modules/es.object.to-string.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.symbol.js";
import "core-js/modules/es.symbol.description.js";
import "core-js/modules/es.symbol.iterator.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.string.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

if (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) {
  document.querySelector('h1').textContent = 'Working!';
}

var sayHi = function sayHi(name) {
  return new Promise(function (resolve, reject) {
    console.log('Hi', name);
    resolve("Hi ".concat(name, "!"));
  }); // return `Hi ${name}!`
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