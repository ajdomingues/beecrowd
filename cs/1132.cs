int primeiroNum = int.Parse(Console.ReadLine());
int segundoNum = int.Parse(Console.ReadLine());
int soma = 0;
if (primeiroNum < segundoNum)
{
    for (int i = primeiroNum; i <= segundoNum; i++)
    {
        if (i % 13 != 0)
        {
            soma += i;
        }
    }
    Console.WriteLine(soma);
}
else
{
    for (int i = segundoNum; i <= primeiroNum; i++)
    {
        if (i % 13 != 0)
        {
            soma += i;
        }
    }
    Console.WriteLine(soma);
}