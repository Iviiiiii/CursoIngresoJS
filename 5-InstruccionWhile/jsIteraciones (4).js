function Mostrar()
{

	var numero;
	numero=prompt("ingrese un número entre 0 y 10.");
	while(numero>9||numero<0||numero==""||numero==null)
	{
		numero=prompt("ingrese un número entre 0 y 10.");
	}
	
	document.getElementById("Numero").value=numero;

}//FIN DE LA FUNCIÓN