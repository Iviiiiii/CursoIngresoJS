/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var num1;
var num2;
var resultado;
var numer1;
var numer2;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

numer1=parseInt(num1);
numer2=parseInt(num2);

resultado=numer1+numer2;

alert("La suma es "+resultado);
}

