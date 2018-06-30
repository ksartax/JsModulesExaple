define(['./Language'], function(language) {
    'use strict';
    
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
});