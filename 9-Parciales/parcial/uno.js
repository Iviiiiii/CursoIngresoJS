
function Mostrar()
{
var lado;
var perimetro;
var superficie;
var altura;

lado=document.getElementById("laBase").value;
altura=prompt("Diga altura");
lado=parseInt(lado);

perimetro=lado*3;
superficie=altura*lado/2;
alert(perimetro);
alert(superficie);
}
