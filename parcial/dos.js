function Mostrar()
{
  var importe;
  var importeFinal;

  importe=prompt("Ingrese Imnporte");

  importe=parseInt(importe);

  importeFinal=importe*1.21;

  document.getElementById("importeFinal").value=importeFinal;
}
