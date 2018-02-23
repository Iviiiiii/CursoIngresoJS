function Mostrar()
{
	var numero;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var respuesta="si";
	var numeroNegativo;
	var numeroPositivo;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	while(respuesta!="no")
	{
		numero=prompt("diga numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("diga numero");
			numero=parseInt(numero);
		}
	if(numero<0)
	{
		numeroNegativo=numero+numero;
		contadorNegativos++;
	}
	if(numero>0)
	{
		numeroPositivo=numero+numero;
		contadorPositivos++;

	}
	if(numero==0)
	{
		contadorCeros++;
	}
	respuesta=prompt("desea continuar?");
	}

promedioPositivos=numeroPositivo/contadorPositivos;
promedioNegativos=numeroNegativo/contadorNegativos;
diferencia=numeroPositivo-numeroNegativo;

document.write("1-"+numeroNegativo).value;
document.write("2-"+numeroPositivo).value;
document.write("3-"+contadorPositivos).value;
document.write("4-"+contadorNegativos).value;
document.write("5-"+contadorCeros).value;
document.write("6"+).value;
document.write("7-"+promedioPositivos).value;
document.write("8-"+promedioNegativos).value;
document.write("9-"+diferencia).value;

}//FIN DE LA FUNCIÓN