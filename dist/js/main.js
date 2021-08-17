"use strict";

var sayHi = function sayHi(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hi ".concat(name, "!"));
    }, 500);
  });
};

sayHi('Kaleb').then(function (response) {
  console.log(response);
});
sayHi('Travis').then(function (response) {
  console.log(response);
});
sayHi('Jason').then(function (response) {
  console.log(response);
});