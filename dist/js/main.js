"use strict";

console.log('Hello world');

var getProfile = function getProfile(username) {
  return fetch("https://api.github.com/users/".concat(username)).then(function (data) {
    console.log(data.json())({
      name: data.name,
      location: data.location,
      company: data.company
    });
  })["catch"](function (e) {
    console.warn(e);
  });
};

getProfile('KalebDykema').then(function (response) {
  console.log(response);
});