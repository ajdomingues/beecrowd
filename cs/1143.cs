int quantidadeLinhas = int.Parse(Console.ReadLine());
for (int i = 1; i <= quantidadeLinhas; i++)
{
    Console.WriteLine($"{i} {Math.Pow(i, 2)} {Math.Pow(i, 3)}");
}