String line = Console.ReadLine();
string[] valor = line.Split(' ');
int a = int.Parse(valor[0]);
int b = int.Parse(valor[1]);
int c = int.Parse(valor[2]);
int maior = (a + b + Math.Abs(a - b)) / 2;
int maiorABC = (maior + c + Math.Abs(maior - c)) / 2;
Console.WriteLine($"{maiorABC} eh o maior");