function passvalue(){
    var animal= document.getElementById('animal-1').value;
    var anotherAnimal= document.getElementById('animal-2').value;
    var oneMoreaAnimal= document.getElementById('animal-3').value;
    var adjective = document.getElementById('adj-1').value;
    var verb = document.getElementById('verb-1').value;
    var number= document.getElementById('num-1').value;
    var yes = document.getElementById('yes').value;
    var no = document.getElementById('no').value;
    var relativeSpeed= document.getElementById('speed').value;
    var motivationalQuote= document.getElementById('quote-choice').value;
    var meaningfulMeassage = document.getElementById('message').value;
    // var anotherAnimal= document.getElementById('message').value;

    localStorage.setItem("textValue", animal );
    localStorage.setItem("textValue1", anotherAnimal );
    localStorage.setItem("textValue2", oneMoreaAnimal );
    localStorage.setItem("textValue3", adjective);
    localStorage.setItem("textValu4", verb);
    localStorage.setItem("textValue5", number );
    localStorage.setItem("textValue6", yes );
    localStorage.setItem("textValue7", no );
    localStorage.setItem("textValue8",  relativeSpeed );
    localStorage.setItem("textValue9", motivationalQuote);
    localStorage.setItem("textValue10",  meaningfulMeassage);
    // localStorage.setItem("textValue1", anotherAnimal );
   
    console.log( animal);
    console.log( localStorage);
    return false;
}
