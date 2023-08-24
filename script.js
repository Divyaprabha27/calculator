var erase = document.querySelector("#erase");
var clear = document.querySelector("#clear");
var eqaul = document.querySelector("#equal");

var btn_0 = document.querySelector("#zero");
var btn00 = document.querySelector("#dzero");
var btn1 = document.querySelector("#one");
var btn2 = document.querySelector("#two");
var btn3 = document.querySelector("#three");
var btn4 = document.querySelector("#four");
var btn5 = document.querySelector("#five");
var btn6 = document.querySelector("#six");
var btn7 = document.querySelector("#seven");
var btn8 = document.querySelector("#eight");
var btn9 = document.querySelector("#nine");

var btnplus = document.querySelector("#plus");
var btnmin = document.querySelector("#min");
var btnmul = document.querySelector("#mul");
var btndivide = document.querySelector("#divide");
var btndot = document.querySelector("#dot");

var write = document.querySelector("#type");
var result = document.querySelector("#result");


btn00.onclick = () => {
    type_to("00");
 }
 btn1.onclick = () => {
    type_to(1);
 }
 btn2.onclick = () => {
    type_to(2);
 }
 btn3.onclick = () => {
    type_to(3);
 }
 btn4.onclick = () => {
    type_to(4);
 }
 btn5.onclick = () => {
    type_to(5);
 }
 btn6.onclick = () => {
    type_to(6);
 }
 btn7.onclick = () => {
    type_to(7);
 }
 btn8.onclick = () => {
    type_to(8);
 }
 btn9.onclick = () => {
    type_to(9);
 }
 btnplus.onclick = () => {
    type_to("+");
 }
 btnmin.onclick = () => {
    type_to("-");
 }
 btnmul.onclick = () => {
    type_to("*");
 }
 btndivide.onclick = () => {
    type_to("/");
 }
 btndot.onclick = () => {
    type_to(".");
 }
 equal.onclick = () => {
    calculate();
 }
 clear.onclick = () => {
    clear_screen();
 }
erase.onclick = () => {
    erase_screen();
}
 
 document.onkeyup = e => {
    if(e.key == "0" || e.key == "Num0") {
        type_to(0);
    } else if (e.key == "1" || e.key == "Num1") {
        type_to(1); 
    }
    else if (e.key == "2" || e.key == "Num2") {
        type_to(2); 
    }
    else if (e.key == "3" || e.key == "Num3") {
        type_to(3); 
    }
    else if (e.key == "4" || e.key == "Num4") {
        type_to(4); 
    }
    else if (e.key == "5" || e.key == "Num5") {
        type_to(5); 
    }
    else if (e.key == "6" || e.key == "Num6") {
        type_to(6); 
    }
    else if (e.key == "7" || e.key == "Num7") {
        type_to(7); 
    }
    else if (e.key == "8" || e.key == "Num8") {
        type_to(8); 
    }
    else if (e.key == "9" || e.key == "Num9") {
        type_to(9); 
    }
    else if (e.key == "+" || e.key == "Num+") {
        type_to("+"); 
    }
    else if (e.key == "-" || e.key == "Num-") {
        type_to("-"); 
    }
    else if (e.key == "*" || e.key == "Num*") {
        type_to("*"); 
    }
    else if (e.key == "/" || e.key == "Num/") {
        type_to("/"); 
    }
    else if (e.key == "." || e.key == "Num.") {
        type_to("."); 
    }
    else if (e.key == "Enter" || e.key == "Numenter") {
        calculate();
    }
    else if (e.key == "Delete" || e.key == "Numdelete") {
        clear_screen();
    }
    else if (e.key == "Backspace" || e.key == "Escape") {
        erase_screen();
    }
 }

 var type_to = text => {
    if(write.innerText == ""){
        write.innerText = text;
    }
    else if (write.innerText.length <= 20) {
        write.innerText = write.innerText + text;
    }
    else {
        alert("Digit Limit reached");
    }
 }
 var calculate = () => {
    result.innerText = eval(write.innerText);
 }
 var clear_screen = () => {
    write.innerText = "";
    result.innerText = "";
 }
 var erase_screen = () => {
    write.innerText = write.innerText.toString().slice(0,-1);
 }
