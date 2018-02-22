function Mostrar()
{
var num1;
var num2;
var resultado;

num1=prompt("Diga numero");
num2=prompt("Diga numero");

resultado=num1+num2

if(resultado>0)
{
    document.write("Positivo");
}
else if(resultado<0)
{
    document.write("Negativo");
}
else
{
    document.write("Cero");
}
}
