double tempoViagem = double.Parse(Console.ReadLine());
double velocidadeMedia = double.Parse(Console.ReadLine());
const double consumoPadrao = 12;
double litrosGastos = (tempoViagem * velocidadeMedia) / consumoPadrao;
Console.WriteLine(litrosGastos.ToString("0.000"));