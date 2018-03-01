//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var importe;
var contador=0;
var bandera=0;
var maximo;
var minimo;

while(contador<7)
{
	contador++;
	importe=prompt("diga importe");
	while(importe<0)
	{
		importe=prompt("Error, poner numero mayor a 0");
	}
	importe=parseInt(importe);
	if(bandera==0)
	{
		bandera++;
		maximo=importe;
		minimo=importe;
	}
	else
	{
		if(importe>maximo)
		{
			maximo=importe;
		}
		else
		{
			minimo=importe;
		}
	}
}
console.log("importe maximo fue "+maximo);
console.log("importe minimo fue "+minimo);
}

