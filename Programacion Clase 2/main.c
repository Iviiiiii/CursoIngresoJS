#include <stdio.h>
#include <stdlib.h>

int main()
{
    int i;
    int edad;
    int nota;
    char sexo;
    int contadorNotas=0;
    int promedio;
    int notaMin=0;
    int flag=0;
    char sexoNotaBaja;
    int masJoven;
    char sexoMasJoven;
    int notaMasJoven;
    int contadorVarones=0;
    int contadorMujeres=0;
    int edadMujer;
    int notaMujer;

    for(i=0;i<5;i++)
    {
        printf("Diga nota: ");
        scanf("%d",&nota);
        while(nota<0&&nota>10)
        {
            printf("Nota erronea, diga devuelta: ");
            scanf("%d",&nota);
        }
        contadorNotas=nota+contadorNotas;

        printf("Diga edad: ");
        scanf("%d",&edad);
        while(edad<0)
        {
            printf("Edad erronea, diga devuelta: ");
            scanf("%d",&edad);
        }

        printf("Diga sexo: ");
        fflush(stdin);
        scanf("%c",&sexo);
        while(sexo!='f'&&sexo!='m')
        {
            printf("Sexo erroneo, diga devuelta: ");
            fflush(stdin);
            scanf("%c",&sexo);
        }
        if(flag==0) //nota mas baja y sexo
        {
            flag++;
            notaMin=nota;
            sexoNotaBaja=sexo;
            sexoMasJoven=sexo;
            masJoven=edad;
        }
        else
        {
            if(nota<notaMin)
            {
                notaMin=nota;
                sexoNotaBaja=sexo;
            }
            if(edad<masJoven)//sexo y nota del mas joven
            {
                masJoven=edad;
                sexoMasJoven=sexo;
                notaMasJoven=nota;

            }
        }
        if(sexo=='m'&&edad>=18&&nota>=6)
        {
            contadorVarones++;
        }
        if(sexo=='f'&&contadorMujeres==0)
        {
            contadorMujeres++;
            edadMujer=edad;
            notaMujer=nota;
        }
    }//for
    promedio=(float)contadorNotas/5; //promedio de notas

    printf("El promedio es %.2f\n",promedio);
    printf("La nota mas baja es %d y el sexo es %c\n",notaMin,sexoNotaBaja);
    printf("Cantidad de varones mayores a 18 y con nota mayor o igual a 6: %d",contadorVarones);
    printf("El sexo del mas joven es %c y la nota es %d\n",sexoMasJoven,notaMasJoven);
    if(contadorMujeres==0)
    {
        printf("No hubo ninguna mujer");
    }
    else
    {
        printf("La primer mujer ingresada tiene &d y su nota es de &d",edadMujer,notaMujer);
    }
}
