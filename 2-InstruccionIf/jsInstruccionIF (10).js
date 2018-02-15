function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	numero=parseInt((Math.random()*(11-1))+1);
	if(numero>=9)
	{
		alert("Excelente");
	}
	else if(numero>=6)
	{
		alert("Muy Bien");
	}
	else if(numero>=4)
	{
		alert("Bien");
	}
	else if(numero>=2)
	{
		alert("Mal");
	}
	else
	{
		alert("Desaprobo");
	}
}//FIN DE LA FUNCIÓN