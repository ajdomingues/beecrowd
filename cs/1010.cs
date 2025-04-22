String line1 = Console.ReadLine();
String line2 = Console.ReadLine();

string[] entrada1 = line1.Split(' ');
int codigoPeca1 = int.Parse(entrada1[0]);
int quantPeca1 = int.Parse(entrada1[1]);
double valorPeca1 = double.Parse(entrada1[2]);

string[] entrada2 = line2.Split(' ');
int codigoPeca2 = int.Parse(entrada2[0]);
int quantPeca2 = int.Parse(entrada2[1]);
double valorPeca2 = double.Parse(entrada2[2]);

double somatorio = (quantPeca1 * valorPeca1) + (quantPeca2 * valorPeca2);

Console.WriteLine($"VALOR A PAGAR: R$ {somatorio.ToString("0.00")}");