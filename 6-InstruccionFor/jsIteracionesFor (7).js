function Mostrar()
{
var numero=prompt("diga numero");
var numDivisores=0;
for(var i=1;i<=numero;i++)
{
    if(numero%i==0)
    {
        numDivisores++;
        alert(i);
    }
}
alert(numDivisores);

}//FIN DE LA FUNCIÓN