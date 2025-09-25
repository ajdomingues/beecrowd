int ddd = int.Parse(Console.ReadLine());
String mensagem = "";
if (ddd == 11)
{
    mensagem = "Sao Paulo";
}
else if (ddd == 19)
{
    mensagem = "Campinas";
}
else if (ddd == 21)
{
    mensagem = "Rio de Janeiro";
}
else if (ddd == 27)
{
    mensagem = "Vitoria";
}
else if (ddd == 31)
{
    mensagem = "Belo Horizonte";
}
else if (ddd == 32)
{
    mensagem = "Juiz de Fora";
}
else if (ddd == 61)
{
    mensagem = "Brasilia";
}
else if (ddd == 71)
{
    mensagem = "Salvador";
}
else
{
    mensagem = "DDD nao cadastrado";
}
Console.WriteLine(mensagem);