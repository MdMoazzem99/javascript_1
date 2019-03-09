// text start
function myName(){
	document.getElementById("text").innerHTML="Jesan";
}
// text end
// date start
function dateExample(){
	document.getElementById("date_demo").innerHTML=Date();
}
// date end
// bulb start
// bulb on start
function bulbOn(){
	document.getElementById("image").src="images/pic_bulbon.gif";
}
// bulb on end
// bulb off start
function bulbOff(){
	document.getElementById("image").src="images/pic_bulboff.gif";
}
// bulb off end
// bulb end
// CSS start
// text size start
function textSize(){
	document.getElementById("text_size").style.fontSize="50px";
}
// text size end
// hide start
function hide(){
	document.getElementById("show_hide").style.display="none";
}
// hide end
// hide start
function show(){
	document.getElementById("show_hide").style.display="block";
}
// hide end
// CSS end
// output start
// innerHTML start
function plus(){
	document.getElementById("plus_content").innerHTML=5+5;
}
function minus(){
	document.getElementById("minus_content").innerHTML=10-5;
}
// innerHTML end
// window.write() start
function plusA(){
	document.write(5+5);
}
function minusA(){
	document.write(10-5);
}
// window.write() end
// window.alart() start
function plusB(){
	window.alert(5+5);
}
function minusB(){
	window.alert(10-5);
}
// window.alart() end
// console.log() start
function plusC(){
	console.log(5+5);
}
function minusC(){
	console.log(10-5);
}
// console.log() end
// output end
// statements start
// part 1 start
var xq, yq, zq;
xq = 5;
yq = 6;
zq = xq + yq;
document.getElementById("demo").innerHTML = "The value of z is " + zq + ".";
// part 1 end
// part 2 start
var xw, yw, zw;
xw = 5; yw = 7; zw = xw + yw;
document.getElementById("demo_1").innerHTML = zw;
// part 2 end
// part 3 start
document.getElementById("demo_2").innerHTML = "Hello World";
// part 3 end
// part 4 start
function myFunctionA(){
	document.getElementById("demo_3").innerHTML = "Hello World";
	document.getElementById("demo_3_1").innerHTML = "Hello My All Dear Friends";
}
// part 4 end
// part 5 start
var xe, ye, ze;
xe = 5; ye = 7;
ze = xe + ye;
function myFunction(){
	document.getElementById("demo_4").innerHTML = ze;
}
// part 5 end
// statements end
// Syntax start
function number(){
	document.getElementById("number").innerHTML = 10.50;
	document.getElementById("number_1").innerHTML = 10.00;
}
// Syntax end
// string start
function string(){
	document.getElementById("string_1").innerHTML = "Double qoutation";
	document.getElementById('string_2').innerHTML = 'Single qoutation';
}
// string end
// var start
// part 1 start
var x;
x = 6;
function variableA(){
	document.getElementById("var").innerHTML = x;
}
// part 1 end
// part 2 start
var q, y, z;
q = 6;
y = 7;
z = q + y;
function variableB(){
	document.getElementById("var_2").innerHTML = z;
}
// part 2 end
// part 3 start
var price1, price2, price3, total;
price1 = 6;
price2 = 8;
price3 = 9;
total = price1 + price2 + price3;
function variableC(){
	document.getElementById("var_3").innerHTML = total;
}
// part 3 end
// part 4 start
var person, carname, pi, money, m;
person = "Jesan";
carName = 'BMW';
pi = 3.1416;
money = 100000000;
m = pi * money;
function variableD(){
	document.getElementById("var_4").innerHTML = person + "<br>" + carname + "<br>" + pi + "<br>" + money + "<br>" + m;
}
// part 4 end
// part 5 start
var k;
function variableE(){
	document.getElementById("var_5").innerHTML = k;
}
// part 5 end
// part 6 start
var w;
w = 6;
function variableF(){
	document.getElementById("var_6").innerHTML = w;
}
var w;
function variableG(){
	document.getElementById("var_7").innerHTML = w;
}
// part 6 end
// part 7 start
var e;
e = "John" + " " + "Doe";
function variableH(){
	document.getElementById("var_8").innerHTML = e;
}
// part 7 end
// part 8 start
var r;
r = "5" + 8 + 9;
function variableI(){
	document.getElementById("var_9").innerHTML = r;
}
var t;
t = 5 + "8" + 9;
function variableO(){
	document.getElementById("var_10").innerHTML = t;
}
var y;
y = 5 + 8 + "9";
function variableP(){
	document.getElementById("var_11").innerHTML = y;
}
// part 8 end
// var end
