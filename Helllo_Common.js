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