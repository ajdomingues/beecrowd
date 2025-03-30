# beecrowd
# Exercícios JS e SQL


Exercícios que fiz na plataforma do Beecrowd. Abaixo separei por linguagem.

Junto a cada exercício tem um arquivo markdown explicando o que foi utilizado para resolução.
# CS


# JS

> [!IMPORTANT]
>Para poder executar corretamente dentro do Beecrowd os exercícios em JS devem conter essas duas linhas no topo:

```jsx
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
```

Por padrão, essas duas linhas aparecem automaticamente na caixa pra responder quando você abre. Mas caso elas não aparecerem, coloque.

À partir dela é que se faz a entrada de dados. Exemplo, pegar dois valores:

```jsx
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
```

> [!NOTE]
>No JavaScript não é necessário colocar `;` no final da sintaxe, mas o Beecrowd exige isso para funcionar. Sempre que estiver descrito o nome de variáveis, retornos, etc, que devem ser usadas, as descreva do mesmo jeito que foi proposto - levando em consideração até se é maiúsculo ou minúsculo - pois isso vai ser verificado isso também na validação do exercício.

# SQL

Criei o hábito de colocar as palavras reservadas do SQL em maiúsculas, e quebrar as linhas conforme vou colocando as declarações, exemplo:

```sql
SELECT *
FROM nomeDaTabela
```

Isso não faz diferença na execução da query, mas ajuda a organizar a sintaxe.

O Beecrowd, até o momento, só tem a opção do do banco PostegreSQL, mas pra quem conhece Microsoft SQL ou MySQL não vai ter dificuldade.

Pra quem usa MySQL e coloca por padrão o `;` no final da sintaxe, aqui pode por ou não que vai funcionar do mesmo jeito.

Pra organizar a minha query, quando é necessário usar um **`INNER JOIN`**, pego o nome da tabela e crio um “apelido” que me lembre o nome da tabela. Por exemplo: a tabela `products` vira `prod`.  Esse apelido serve para evitar ambiguidades. Por exemplo: Você precisa fazer um `JOIN` entre as tabelas products e a providers e vai pegar o nome do produto na products e o nome do fornecedor na providers; pra isso você precisa pegar a coluna que traz o nome nas duas, que nesse caso seria a coluna **name**. Isso daria uma ambiguidade na hora de processar essa query; se você colocasse apenas name, o SQL não ia saber se você está falando da tabela produtcts ou providers. É aí que podemos usar os apelidos:

```sql
SELECT prod.name, prov.name
FROM products prod
INNER JOIN providers prov ON (prod.id_providers = prov.id)
```

Algumas pessoas põe letras aleatórias como a, b, c… ou somente a primeira letra do nome da tabela - o que dá certo também, mas pra outra pessoa analisar ou dar manutenção nessa query pode ser mais difícil identificar que tabela é aquela representado por ‘a’.

No `JOIN`, tenho a mania de colocar as condições do `ON` dentro de `( )`. Isso não faz diferença na hora de executar a query, mas acredito ficar mais organizado na hora de analisar a sintaxe.