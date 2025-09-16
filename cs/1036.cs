double A = double.Parse(Console.ReadLine());
double B = double.Parse(Console.ReadLine());
double C = double.Parse(Console.ReadLine());
double DELTA = Math.Pow(B, 2) - (4 * A * C);
if (DELTA < 0 || A == 0)
{
    Console.WriteLine("Impossivel calcular");
}
else
{
    double R1 = (-B + (Math.Sqrt(DELTA))) / (2 * (A));
    double R2 = (-B - (Math.Sqrt(DELTA))) / (2 * (A));
    Console.WriteLine($"R1 = {R1:F5}");
    Console.WriteLine($"R2 = {R2:F5}");
}