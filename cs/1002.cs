double raio = double.Parse(Console.ReadLine());
const double pi = 3.14159;
double area = pi * Math.Pow(raio, 2);
Console.WriteLine($"A={area.ToString("0.0000")}");