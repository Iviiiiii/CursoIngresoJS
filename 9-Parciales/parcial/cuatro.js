function Mostrar()
{

var dato;
var dato2;
var resultado;
var resultadoPar;

dato=prompt("Pon un numero");
dato2=prompt("Pon otro numero");


if(dato==dato2)
{
resultado=dato+dato2;
}
else 
{
    dato=parseInt(dato);
    dato2=parseInt(dato2);
    if(dato>dato2)
    {
        resultado=dato*dato2;
    }
    else
    {
        resultado=dato-dato2;
    }
}
if(resultado%2==0&&resultado!=0)
{
    resultadoPar="es par ";
}
else
{
    resultadoPar=" ";
}
alert(resultado+resultadoPar);
}
