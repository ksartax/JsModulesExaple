"use strict";

var _Language_ES = require("./Language_ES15.js");

// import language  from './Language_ES15.js';
// import {helloENG} from './Language_ES15.js';

function getHello(lang) {
    switch (lang) {
        case "PL":
            {
                return _Language_ES.helloPL;
            }
        default:
            {
                return _Language_ES.helloENG;
            }
    }
}

console.log(getHello("PL"));