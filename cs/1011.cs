double raio = double.Parse(Console.ReadLine());
const double pi = 3.14159;
double resultado = (4 / 3.0) * pi * Math.Pow(raio, 3);
Console.WriteLine($"VOLUME = {resultado.ToString("0.000")}");