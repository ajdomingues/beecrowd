int quantidadeTestes = int.Parse(Console.ReadLine());
for (int i = 0; i < quantidadeTestes; i++)
{
    int numeroRepeticoes = int.Parse(Console.ReadLine());
    int soma = 0;
    for (int j = 0; j < numeroRepeticoes; j++)
    {
        if (j % 2 == 0)
        {
            soma++;
        }
        else
        {
            soma--;
        }
    }
    Console.WriteLine(soma);
}