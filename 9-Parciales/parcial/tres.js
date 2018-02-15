function Mostrar()
{
var largo;
var ancho;
var resultado
var perimetro

largo=document.getElementById("alrgo").value;
ancho=document.getElementById("ancho").value;

largo=parseInt(largo);
ancho=parseInt(ancho);

perimetro=(largo+ancho)*2;
resultado=perimetro*3;
alert(resultado);
}
