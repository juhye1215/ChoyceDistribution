/**background image changes */
let bg = document.getElementById("bgChange");
function bgChange1() {
    bg.style.backgroundImage = "url(/img/meat.jpeg)";
    bg.style.backgroundSize ="cover";
    bg.style.height ="100%";
    document.getElementById("tabimg1").style.filter = "brightness(100%)";
    document.getElementById("tabimg2").style.filter = "brightness(50%)";
    document.getElementById("tabimg3").style.filter = "brightness(50%)";
    document.getElementById("tabimg4").style.filter = "brightness(50%)";
 }
 function bgChange2() {
    bg.style.backgroundImage = "url(/img/salmon.jpeg)";
    bg.style.backgroundSize ="cover";
    bg.style.height ="100%";
    document.getElementById("tabimg1").style.filter = "brightness(50%)";
    document.getElementById("tabimg2").style.filter = "brightness(100%)";
    document.getElementById("tabimg3").style.filter = "brightness(50%)";
    document.getElementById("tabimg4").style.filter = "brightness(50%)";
 }
 function bgChange3() {
    bg.style.backgroundImage = "url(/img/sushi.jpeg)";
    bg.style.backgroundSize ="cover";
    bg.style.height ="100%";
    document.getElementById("tabimg1").style.filter = "brightness(50%)";
    document.getElementById("tabimg2").style.filter = "brightness(50%)";
    document.getElementById("tabimg3").style.filter = "brightness(100%)";
    document.getElementById("tabimg4").style.filter = "brightness(50%)";
 }
 function bgChange4() {
    bg.style.backgroundImage = "url(/img/local.jpeg)";
    bg.style.backgroundSize ="cover";
    bg.style.height ="100%";
    document.getElementById("tabimg1").style.filter = "brightness(50%)";
    document.getElementById("tabimg2").style.filter = "brightness(50%)";
    document.getElementById("tabimg3").style.filter = "brightness(50%)";
    document.getElementById("tabimg4").style.filter = "brightness(100%)";
 }


/**product list print */
 function print1() {
   var print = window.open("");
   print.document.write(document.getElementById("print-meat").innerHTML);
   print.stop();
   print.print();
   print.close();
 }

 function print2() {
   var print = window.open("");
   print.document.write(document.getElementById("print-seafood").innerHTML);
   print.stop();
   print.print();
   print.close();
 }

 function print3() {
   var print = window.open("");
   print.document.write(document.getElementById("print-sushi").innerHTML);
   print.stop();
   print.print();
   print.close();
 }

 function print4() {
   var print = window.open("");
   print.document.write(document.getElementById("print-local").innerHTML);
   print.stop();
   print.print();
   print.close();
 }

