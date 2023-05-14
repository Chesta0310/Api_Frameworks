(function () {
    function StartAll() {
        Start1();
        Start2();
        Start3();
    }
   
    //function1
    function Start1() {
        console.log("App Started 1");
    }

    //function2
    var Start2 = function () {
        console.log("App Started 2");
    };

    //function3
    var Start3 = function () {
        console.log("App Started 3");
    };

    
    window.addEventListener("load", Start1);
})();