function Mostrar()
{
    var importe;
    var descuento
    importe=prompt("Diga Importe");
    importe=parseInt(importe);
    descuento=importe*0.75;
    document.getElementById("importeFinal").value=descuento;
}
