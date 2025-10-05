double salario = double.Parse(Console.ReadLine());
double novoSalario = 0;
double reajusteGanho = 0;
double percentual = 0;
if (salario > 2000)
{
    percentual = 4;
    novoSalario = salario + (salario * (percentual / 100));
    reajusteGanho = novoSalario - salario;
}
else if (salario >= 1200.01 && salario <= 2000)
{
    percentual = 7;
    novoSalario = salario + (salario * (percentual / 100));
    reajusteGanho = novoSalario - salario;    
}else if (salario >= 800.01 && salario <= 1200)
{
    percentual = 10;
    novoSalario = salario + (salario * (percentual / 100));
    reajusteGanho = novoSalario - salario;    
}else if (salario >= 400.01 && salario <= 800)
{
    percentual = 12;
    novoSalario = salario + (salario * (percentual / 100));
    reajusteGanho = novoSalario - salario;    
}else 
{
    percentual = 15;
    novoSalario = salario + (salario * (percentual / 100));
    reajusteGanho = novoSalario - salario;    
}

Console.WriteLine($"Novo salario: {novoSalario:F2}");
Console.WriteLine($"Reajuste ganho: {reajusteGanho:F2}");
Console.WriteLine($"Em percentual: {percentual} %");