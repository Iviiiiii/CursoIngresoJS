//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero1;
	var numero2;
	var numFinal
	numero1=prompt("diga numero 1");
	numero2=prompt("diga numero 2");
	numero1=parseInt(numero1);
	numero2=parseInt(numero2);
	if(numero1==numero2)
	{
		numFinal=numero1*numero2;
	}
	else if(numero1>numero2)
	{
		numFinal=numero1-numero2;
	}
	else
	{
		numFinal=numero1+numero2;
	}
	document.write(numFinal);
}

