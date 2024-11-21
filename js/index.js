// function randomQuote(){
//     var quote =["“A room without books is like a body without a soul.”" , "“You only live once, but if you do it right, once is enough.”" , "“Be the change that you wish to see in the world.”" , "“We are all in the gutter, but some of us are looking at the stars.”" , "“We don't see things as they are, we see them as we are.”" , "“We read to know we're not alone.”" , "“Do what you can, with what you have, where you are.”" , "“Peace begins with a smile..”" , "“A clever person solves a problem. A wise person avoids it.”"];
//     var author =["― Marcus Tullius Cicero" , "― Mae West" , "― Mahatma Gandhi" , "― Oscar Wilde" , "― Anaïs Nin" , "― William Nicholson" , "― Theodore Roosevelt" , "― Mother Teresa" , "― Albert Einstein"];
//     var randomNumber = Math.floor(Math.random()*quote.length);
//     document.getElementById("quote").innerHTML = quote[randomNumber];
//     document.getElementById("author").innerHTML = author[randomNumber];
// }

var lastRandomNumber=-1; 
function randomQuote(){
    var quote =["“A room without books is like a body without a soul.”" , "“You only live once, but if you do it right, once is enough.”" , "“Be the change that you wish to see in the world.”" , "“We are all in the gutter, but some of us are looking at the stars.”" , "“We don't see things as they are, we see them as we are.”" , "“We read to know we're not alone.”" , "“Do what you can, with what you have, where you are.”" , "“Peace begins with a smile..”" , "“A clever person solves a problem. A wise person avoids it.”"];
    var author =["― Marcus Tullius Cicero" , "― Mae West" , "― Mahatma Gandhi" , "― Oscar Wilde" , "― Anaïs Nin" , "― William Nicholson" , "― Theodore Roosevelt" , "― Mother Teresa" , "― Albert Einstein"];
    do{
        var randomNumber = Math.floor(Math.random()*quote.length);   
    }while( randomNumber === lastRandomNumber ); 
    lastRandomNumber =  randomNumber; 
    document.getElementById("quote").innerHTML = quote[randomNumber];
    document.getElementById("author").innerHTML = author[randomNumber];
    console.log(quote[randomNumber] , author[randomNumber]);
}


