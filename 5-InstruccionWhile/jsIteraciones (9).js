function Mostrar()
{
	var numero;
	var contador=0;
	var respuesta='si';
	var maximo;
	var minimo;
	while(respuesta!='no')
	{	
		contador++;
		numero=prompt("Numero");
		numero=parseInt(numero);
		while(isNaN(numero))
		{
			numero=prompt("Numero");
			numero=parseInt(numero);
		}
		if(contador==1)
		{
			maximo=numero;
			minimo=numero;
		}
		else
		{
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;
			}
		}
		respuesta=prompt("Quiere continuar?");
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN