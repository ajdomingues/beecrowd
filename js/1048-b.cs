    static void Main(string[] args) { 

      double salario = double.Parse(Console.ReadLine());
double percentual = calcularPercentual(salario);
double novoSalario = salario + (salario * (percentual / 100));
double reajusteGanho = novoSalario - salario;

Console.WriteLine($"Novo salario: {novoSalario:F2}");
Console.WriteLine($"Reajuste ganho: {reajusteGanho:F2}");
Console.WriteLine($"Em percentual: {percentual} %");
    }
    static double calcularPercentual(double salario)
{
    if (salario > 2000) return 4;
    if (salario >= 1200.01) return 7;
    if (salario >= 800.01) return 10;
    if (salario >= 400.01) return 12;
    return 15;
}