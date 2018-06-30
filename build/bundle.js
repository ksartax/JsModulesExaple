(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var language = require('./Language_Common.js');

function getHello(lang) {
    switch (lang) {
        case "PL": {
            return language.helloPL;
        }
        default: {
            return language.helloENG;
        }
    }
}

console.log(getHello("PL"));
},{"./Language_Common.js":2}],2:[function(require,module,exports){
var helloPL = "Witaj";
var helloENG = "Hello";

module.exports = {
    helloPL,
    helloENG
}
},{}]},{},[1]);
