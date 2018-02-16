function Mostrar()
{
var dia
dia=prompt("Diga Dia");

    switch(dia)
    {
        case "Sabado":
        case "Domingo":
            alert("Es fin de semana");
            break;
    default:
        alert("A trabajar");
    }
}
