function Mostrar()
{
	var numero;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var respuesta="si";
	var numeroNegativo=0;
	var numeroPositivo=0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;
	var contadorPares=0;

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
			numeroNegativo=numeroNegativo+numero;
			contadorNegativos++;
		}
		else
		{
			if(numero>0)
			{
				numeroPositivo=numeroPositivo+numero;
				contadorPositivos++;
			}
			else
			{
				contadorCeros++;
			}
		}
		if(numero%2==0&&numero!=0)
		{
			contadorPares++;
		}
		respuesta=prompt("desea continuar?");
	}
	
promedioPositivos=numeroPositivo/contadorPositivos;
promedioNegativos=numeroNegativo/contadorNegativos;
diferencia=numeroPositivo+numeroNegativo;

document.write("1-"+numeroNegativo);
document.write("2-"+numeroPositivo);
document.write("3-"+contadorPositivos);
document.write("4-"+contadorNegativos);
document.write("5-"+contadorCeros);
document.write("6-"+contadorPares);
document.write("7-"+promedioPositivos);
document.write("8-"+promedioNegativos);
document.write("9-"+diferencia);

}//FIN DE LA FUNCIÓN