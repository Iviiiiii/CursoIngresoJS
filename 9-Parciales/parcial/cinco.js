function Mostrar()
{
//var dia
//dia=prompt("Diga Dia");

 //   switch(dia)
 //   {
 //       case "Sabado":
 //       case "Domingo":
 //           alert("Es fin de semana");
 //           break;
 //   default:
 //       alert("A trabajar");
 //   }
 var numero1;
 var numero2;
 var numero3;

    numero1=prompt("diga numero 1");
    numero2=prompt("diga numero 2");
    numero3=prompt("diga numero 3");
    numero1=parseInt(numero1);
    numero2=parseInt(numero2);
    numero3=parseInt(numero3);

    if(numero1>numero2&&numero1>numero3)
    {
        alert("El numero mayor es "+numero1);
    }
    else if(numero2>numero1&&numero2>numero3)
    {
        alert("El numero mayor es "+numero2);
    }
    else
    {
        alert("El numero mayor es "+numero3)
    }
}
