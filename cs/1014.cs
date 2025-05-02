double distancia = double.Parse(Console.ReadLine());
double consumo = double.Parse(Console.ReadLine());
double kmLitros = distancia/consumo;
Console.WriteLine($"{kmLitros.ToString("0.000")} km/l");