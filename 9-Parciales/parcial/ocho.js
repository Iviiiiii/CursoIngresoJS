function Mostrar()
{
//ingresar nombre de un animal y su peso y no puede ser NaN e ingresas la temp del habitat y las que puede vivir son +40 o -40
//e ingresas el sexo

//el nombre del animal mas pesado
//nombre del animal cuyo habitat es el mas frio
//cantidad de temperaturas pares e impares
//cantidad de temperaturas positivas y negativas
//el sexo del animal cuyo habitat tiene como temperatura 0
var nombre;
var peso;
var pesoMaximo;
var pesoMinimo;
var temperaturaHabitat=40;
var temperaturaMaxima;
var temperaturaMinima;
var sexo;
var respuesta="si";
var banderaPeso=0;
var banderaTemperatura=0;
var contador=0;

respuesta=prompt("Empezamos?");
while(respuesta!="no")
{   
    contador++;
    nombre=prompt("ingrese nombre");
    peso=prompt("ingrese peso");  
    if(banderaPeso==0)
    {
        banderaPeso++;
        pesoMaximo=peso;
        pesoMinimo=peso;
    }
    else
    {
        if(peso>pesoMaximo)
        {
            pesoMaximo=peso;
        }
        else
        {
            pesoMinimo=peso;
        }
    }
    temperaturaHabitat=prompt("ingrese temperatura del habitat");
    if(banderaTemperatura==0)
    {
        banderaTemperatura++;
        temperaturaMaxima=temperaturaHabitat;
        temperaturaMinima=temperaturaHabitat;
    }
    else
    {
        if(temperaturaHabitat>temperaturaMaxima)
        {
            temperaturaMaxima=temperaturaHabitat;
        }
        else
        {
            temperaturaMinima=peso;
        }
    }
}
}

sexo=prompt("ingrese sexo");
respuesta=prompt("desea continuar?");