int valor = int.Parse(Console.ReadLine());
Console.WriteLine(valor);
int notas100 = 0;
int notas50 = 0;
int notas20 = 0;
int notas10 = 0;
int notas5 = 0;
int notas2 = 0;
int notas1 = 0;

int temporario = valor;
for (int i = 0; i < valor; i++)
{
    if (temporario >= 100) { notas100++; temporario -= 100; }
    else if (temporario >= 50) { notas50++; temporario -= 50; }
    else if (temporario >= 20) { notas20++; temporario -= 20; }
    else if (temporario >= 10) { notas10++; temporario -= 10; }
    else if (temporario >= 5) { notas5++; temporario -= 5; }
    else if (temporario >= 2) { notas2++; temporario -= 2; }
    else if (temporario >= 1) { notas1++; temporario -= 1; }
}
Console.WriteLine(valor);
Console.WriteLine($"{notas100} nota(s) de R$ 100,00");
Console.WriteLine($"{notas50} nota(s) de R$ 50,00");
Console.WriteLine($"{notas20} nota(s) de R$ 20,00");
Console.WriteLine($"{notas10} nota(s) de R$ 10,00");
Console.WriteLine($"{notas5} nota(s) de R$ 5,00");
Console.WriteLine($"{notas2} nota(s) de R$ 2,00");
Console.WriteLine($"{notas1} nota(s) de R$ 1,00");