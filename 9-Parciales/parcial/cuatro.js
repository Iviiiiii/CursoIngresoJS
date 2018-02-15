function Mostrar()
{

var dato;
var dato2;
var resultado
dato=prompt("Pon un numero");
dato2=prompt("Pon otro numero");
dato=parseInt(dato);
dato2=parseInt(dato2);

if(dato==dato2)
{
resultado=dato*dato2;
    document.write(resultado);
}
else if(dato>dato2)
{
resultado=dato-dato2;
    document.write(resultado);
}
else
{
resultado=dato+dato2;
    document.write(resultado);
}
}
