int numero = int.Parse(Console.ReadLine());
int soma = 1;
for (int i = 1; i <= numero; i++)
{
    soma *= i;
}
Console.WriteLine(soma);