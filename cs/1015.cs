String linha1 = Console.ReadLine();
String linha2 = Console.ReadLine();
string[] p1 = linha1.Split(' ');
string[] p2 = linha2.Split(' ');
double x1 = double.Parse(p1[0]);
double y1 = double.Parse(p1[1]);
double x2 = double.Parse(p2[0]);
double y2 = double.Parse(p2[1]);
double calculo = Math.Sqrt(Math.Pow((x2 - x1), 2) + Math.Pow((y2 - y1), 2));
Console.WriteLine(calculo.ToString("0.0000"));