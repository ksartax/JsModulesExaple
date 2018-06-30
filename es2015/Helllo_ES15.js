import {helloPL, helloENG} from './Language_ES15.js';
// import language  from './Language_ES15.js';
// import {helloENG} from './Language_ES15.js';

function getHello(lang) {
    switch (lang) {
        case "PL": {
            return helloPL;
        }
        default: {
            return helloENG;
        }
    }
}

console.log(getHello("PL"));