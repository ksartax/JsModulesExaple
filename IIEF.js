(function () {
    console.log("init IIEF");
})();

//Singleton
var helloPL = (function() {
    console.log("init hello PL");

    //private
    let name = "Witaj";

    function getName() {
        return name;
    }

    function setName(name) {
        this.name = name;
    }

    return {
        getName,
        setName
    }

})();

//---

var HelloENG = (function() {
    //private
    var name = "Hello";

    function getHello() {
        return `Hi, ${name}`;
    }

    return {
        getHello
    }
});

console.log(helloPL.getName());
console.log(new HelloENG().getHello())