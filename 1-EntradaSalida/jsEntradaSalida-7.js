/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
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
    
    resultado=numer1-numer2;
    
    alert("La resta es "+resultado);
}

function multiplicar()
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
    
    resultado=numer1*numer2;
    
    alert("La multiplicacion es "+resultado);
}

function dividir()
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
    
    resultado=numer1/numer2;
    
    alert("La division es "+resultado);
}

