System.register(["core-js/modules/es.object.to-string.js", "core-js/modules/es.promise.js", "core-js/modules/web.timers.js", "core-js/modules/es.symbol.js", "core-js/modules/es.symbol.description.js", "core-js/modules/es.symbol.iterator.js", "core-js/modules/es.array.iterator.js", "core-js/modules/es.string.iterator.js", "core-js/modules/web.dom-collections.iterator.js", "../node_modules/systemjs/dist/system.js"], function (_export, _context) {
  "use strict";

  var System, sayHi, addToUl;

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  return {
    setters: [function (_coreJsModulesEsObjectToStringJs) {}, function (_coreJsModulesEsPromiseJs) {}, function (_coreJsModulesWebTimersJs) {}, function (_coreJsModulesEsSymbolJs) {}, function (_coreJsModulesEsSymbolDescriptionJs) {}, function (_coreJsModulesEsSymbolIteratorJs) {}, function (_coreJsModulesEsArrayIteratorJs) {}, function (_coreJsModulesEsStringIteratorJs) {}, function (_coreJsModulesWebDomCollectionsIteratorJs) {}, function (_node_modulesSystemjsDistSystemJs) {
      System = _node_modulesSystemjsDistSystemJs.default;
    }],
    execute: function () {
      if (typeof Promise === "undefined" ? "undefined" : _typeof(Promise)) {
        document.querySelector('h1').textContent = 'Working!';
      }

      sayHi = function sayHi(name) {
        return new Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve("Hi ".concat(name, "!"));
          }, 500);
        });
      };

      addToUl = function addToUl(text) {
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
    }
  };
});