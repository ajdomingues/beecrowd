int valor = int.Parse(Console.ReadLine());
int restante = valor;

int[] notas = { 100, 50, 20, 10, 5, 2, 1 };
int[] quantidade = new int[notas.Length];

for (int i = 0; i < notas.Length; i++)
{
    quantidade[i] = restante / notas[i];
    restante %= notas[i];
}

Console.WriteLine(valor);
for (int i = 0; i < notas.Length; i++)
{
    Console.WriteLine($"{quantidade[i]} nota(s) de R$ {notas[i]},00");
}