int numero = int.Parse(Console.ReadLine());
double horasTrabalhadas = double.Parse(Console.ReadLine());
double valorHora = double.Parse(Console.ReadLine());
double salario = horasTrabalhadas*valorHora;
Console.WriteLine($"NUMBER = {numero}\nSALARY = U$ {salario.ToString("0.00")}");