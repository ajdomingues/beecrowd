int tempo = int.Parse(Console.ReadLine());
int horas = 0;
int minutos = 0;
int segundos = 0;
int temporario = tempo;

for (int i = 1; i <= tempo; i++)
{
    if (temporario >= 3600)
    {
        horas++;
        temporario -= 3600;
    }
    if (temporario >= 60) {
        minutos++;
        temporario -= 60;
    }

}
segundos = temporario;
Console.WriteLine($"{horas}:{minutos}:{segundos}");