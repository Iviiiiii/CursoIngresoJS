//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
var mes;	
mes=prompt("diga mes");
switch(mes)
{
	case "enero":
	case "febrero":
		alert("veranito");
		break;
	default:
		alert("extraño enero y febrero!!!");
		break;
}
}

