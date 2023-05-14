(function()
{

    function StartAll()
    {
        Start1();
        Start2();
        Start3();
    }


    //function1
    function Start1() : void
    {
        console.log("App Started 1");
    }
    

   //function2
    let Start2 = function() : void
    {
        console.log("App Started 2");
    }
    

    //function3
    let Start3 = ()=>
    {
        console.log("App Started 3");
    }

    window.addEventListener("load", Start1);

})();