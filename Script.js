var anoLuz = prompt("anos luz você quer converter: ");
var emMetro = 9.461e+15;
var comVersao = anoLuz * emMetro;
//Duas casas depôs da vírgula 
comVersao = comVersao.toFixed(2);
alert(comVersao + 'm');
