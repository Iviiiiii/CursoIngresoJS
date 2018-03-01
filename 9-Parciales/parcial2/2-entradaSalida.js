//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	importe=prompt("Diga importe");
	importe=parseInt(importe);
	importe=importe*1.21;
	document.getElementById("importe").value=importe;
	
}

