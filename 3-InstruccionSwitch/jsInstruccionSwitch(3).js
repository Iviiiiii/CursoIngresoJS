function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

    switch(mesDelAño)
{
        default:
            alert("Este mes tiene 30 o más días");
            break;
    
        case "Febrero":
            alert("Este mes no tiene más de 29 días.");
            break;
}
	


}//FIN DE LA FUNCIÓN