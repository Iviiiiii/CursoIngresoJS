function Mostrar()
{
var numero=prompt("diga numero positivo");
var contadorPares=0;
for(var i=1;i<=numero;i++)
{
   if(i%2==0)
   {
       contadorPares++;
       alert(i);
   }
}
alert(contadorPares)


}//FIN DE LA FUNCIÓN