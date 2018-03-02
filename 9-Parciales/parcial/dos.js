function Mostrar()
{
  var importe;
  var importeFinal;
  var descuento;

  descuento=prompt("Ingrese Descuento");
  importe=prompt("Ingrese Imnporte");

  importe=parseInt(importe);
  descuento=parseInt(descuento);

  importeFinal=importe-(importe*descuento/100);

  document.getElementById("importeFinal").value=importeFinal;
}
