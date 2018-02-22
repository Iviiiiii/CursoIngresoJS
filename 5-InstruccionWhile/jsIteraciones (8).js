function Mostrar()
{

	var num;
	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta=="si")
	{
		num=prompt("numero");
		nume=parseInt(num);
		while(isNaN(num))
		{
			num=prompt("numero")
			num=parseInt(num);
		}
	if(num>0)
	{
		positivo=positivo+num;
	}
	else if(num!=0)
	{
		negativo=negativo*num;
	}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN