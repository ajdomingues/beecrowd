int dias = int.Parse(Console.ReadLine());
Console.WriteLine($"{dias / 365} ano(s)");
dias %= 365;
Console.WriteLine($"{dias / 30} mes(es)");
dias %= 30;
Console.WriteLine($"{dias} dia(s)");