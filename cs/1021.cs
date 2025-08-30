decimal valor = decimal.Parse(Console.ReadLine());
int[] notas = { 100, 50, 20, 10, 5, 2 };
decimal[] moedas = { 1.00m, 0.50m, 0.25m, 0.10m, 0.05m, 0.01m };

Console.WriteLine("NOTAS:");
foreach (int nota in notas)
{
    Console.WriteLine($"{Math.Floor(valor / nota)} nota(s) de R$ {nota}.00");
    valor %= nota;
}

Console.WriteLine("MOEDAS:");
foreach (decimal moeda in moedas)
{
    Console.WriteLine($"{Math.Floor(valor / moeda)} moeda(s) de R$ {moeda:0.00}");
    valor %= moeda;
}