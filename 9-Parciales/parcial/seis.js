function Mostrar()
{
var importe;
var contadorDias=0;
var maximo;
var minimo;
var bandera=0;

while(importe>=0&&contadorDias<24)
{
    contadorDias++;
    importe=prompt("diga importe");
    if(bandera==0)
    {
        bandera++;
        maximo=importe;
        minimo=importe;
    }
    else if(maximo<importe)
    {
        maximo=importe;
    }
    else
    {
        minimo=importe;
    }
}
alert("El menor importe fue "+minimo+" y el mayor "+mayor);
}
