string nome = Console.ReadLine();
double salarioFixo = double.Parse(Console.ReadLine());
double totalVendas = double.Parse(Console.ReadLine());
double salarioComBonus = salarioFixo+(totalVendas*0.15);
Console.WriteLine($"TOTAL = R$ {salarioComBonus.ToString("0.00")}");