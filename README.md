# beecrowd
# Exercícios JS e SQL
Exercícios que fiz na plataforma do Beecrowd. Abaixo separei por linguagem.

# JS

> [!IMPORTANT]
>Para poder executar corretamente dentro do Beecrowd os exercícios em JS devem conter essas duas linhas no topo:

```jsx
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
```

Por padrão, essas duas linhas aparecem automaticamente na caixa pra responder. Mas caso não aparecem, coloque.

À partir dela é que se faz a entrada de dados. Exemplo, pegar dois valores:

```jsx
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
```

>[!NOTE]
>No JavaScript não é necessário colocar `;` no final da sintaxe, mas o Beecrowd exige isso para funcionar. Sempre que estiver descrito o nome de variáveis, retornos etc, que devem ser usadas, as descreva do mesmo jeito que foi proposto - levando em consideração até se é maiúsculo ou minúsculo - pois isso vai ser verificado isso também na validação do exercício.

### 1000

**Problema:** O seu primeiro programa em qualquer linguagem de programação normalmente é o "**Hello World!**". Neste primeiro problema tudo o que você precisa fazer é imprimir esta mensagem na tela.

- Basta colocar o `console.log("Hello World");` Não se esqueça de colocar no mesmo formato descrito no enunciado, sem esquecer também a `;` no final da sintaxe.

### 1001

**Problema:** Leia 2 valores inteiros e armazene-os nas variáveis **A** e **B**. Efetue a soma de **A** e **B** atribuindo o seu resultado na variável **X**. Imprima **X** conforme exemplo apresentado abaixo. Não apresente mensagem alguma além daquilo que está sendo especificado e não esqueça de imprimir o fim de linha após o resultado, caso contrário, você receberá "*Presentation Error*".

**Entrada**

A entrada contém 2 valores inteiros.

**Saída**

Imprima a mensagem "X = " (letra X maiúscula) seguido pelo valor da variável **X** e pelo final de linha. Cuide para que tenha um espaço antes e depois do sinal de igualdade, conforme o exemplo abaixo.

- Entrada dos valores já convertendo pra inteiro com o `parseInt`.
- Depois, declaramos a variável **`x`** e colocamos nela a soma de a + b.
- No `console.log` colocamos o X (maiúsculo como pede o enunciado) e a variável x.

```jsx
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');    
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var x = a + b;
   
console.log('X = ' + x);
```

### 1003

**Problema:** Leia dois valores inteiros, no caso para variáveis A e B. A seguir, calcule a soma entre elas e atribua à variável SOMA. A seguir escrever o valor desta variável.

- É feita a entrada de dados para as variáveis `a` e `b`. Na declaração, colocamos a atribuição e usamos o `parseInt()` para que o dado seja armazenado já no formato de número inteiro.
- Em seguida, criamos a variável `SOMA` e fazemos a soma dentro dela.
- Por último, exibimos a resposta no formato como é pedido no enunciado.

```jsx
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
    
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var SOMA = a + b;
   
console.log('SOMA = ' + SOMA);
```

### 1004

**Problema:** Leia dois valores inteiros. A seguir, calcule o produto entre estes dois valores e atribua esta operação à variável PROD. A seguir mostre a variável PROD com mensagem correspondente.   

Entrada
O arquivo de entrada contém 2 valores inteiros.

Saída
Imprima a mensagem "PROD" e a variável PROD conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. Não esqueça de imprimir o fim de linha após o produto, caso contrário seu programa apresentará a mensagem: “Presentation Error”.

- É feita a entrada de dados para as variáveis `a` e `b`. Na declaração, colocamos a atribuição e usamos o `parseInt()` para que o dado seja armazenado já no formato de número inteiro.
- Em seguida, criamos a variável `prod` e fazemos a multiplicação dos valores dentro dela.
- Por último, exibimos a resposta no formato como é pedido no enunciado.

```jsx
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var prod = a * b;
console.log('PROD = '+ prod);
```

### 1007

**Problema:** Leia quatro valores inteiros A, B, C e D. A seguir, calcule e mostre a diferença do produto de A e B pelo produto de C e D segundo a fórmula: DIFERENCA = (A * B - C * D).

Entrada
O arquivo de entrada contém 4 valores inteiros.

Saída
Imprima a mensagem DIFERENCA com todas as letras maiúsculas, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade.*/

- É feita a entrada de dados para as variáveis `A` , `B`, `C` e `D`. Na declaração, colocamos a atribuição e usamos o `parseInt()` para que o dado seja armazenado já no formato de número inteiro.
- Em seguida, criamos a variável `diferenca` e fazemos o cálculo dos valores.
- Por último, exibimos a resposta no formato como é pedido no enunciado.

```
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var A = parseInt(lines.shift());
var B = parseInt(lines.shift());
var C = parseInt(lines.shift());
var D = parseInt(lines.shift());
var diferenca = (A * B - C * D);
console.log("DIFERENCA = " + diferenca);
```

### 1052

**Problema:** Leia um valor inteiro entre 1 e 12, inclusive. Correspondente a este valor, deve ser apresentado como resposta o mês do ano por extenso, em inglês, com a primeira letra maiúscula.

Entrada
A entrada contém um único valor inteiro.

Saída
Imprima por extenso o nome do mês correspondente ao número existente na entrada, com a primeira letra em maiúscula.

- Criamos a variável `mes` e a carregamos com o número digitado pelo usuário e já o convertemos para inteiro usando o `parseInt`.
- Agora usamos  um `swtich` para avaliarmos o que o usuário digitou.
    - Avaliamos as opções de 1 a 12. Por exemplo, se 1, devemos mostrar “January” e assim por diante até chegarmos a 12 com “December”.

>[!IMPORTANT]
>Lembre-se que foi pedido os meses em inglês e sempre com a primeira letra em letra maiúscula.

Após cada validação, colocar o `break;`

```jsx
var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");
var mes = parseInt(lines.shift());
switch (mes) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
}
```

>[!TIP]
>No mundo real, deveríamos colocar um `default` no final do `switch` , para evitar erros, para caso o usuário digitasse algo menor que 1 ou maior 12. Porém, nesse enunciado não foi pedido isso.

### 1059

**Problema:** Faça um programa que mostre os números pares entre 1 e 100, inclusive.

Entrada
Neste problema extremamente simples de repetição não há entrada.

Saída
Imprima todos os números pares entre 1 e 100, inclusive se for o caso, um em cada linha.

- Vamos fazer um laço de repetição. Para controle, criamos a variável `i` que inicia com 1 e ganha +1 a cada passagem do laço até enquanto ela seja ≤ ao nosso alvo, nesse caso 100.
    - Reaproveitamos o contador `i` nessa verificação. A cada passagem do laço, dentro do `if`, fazemos a verificação se o número é par. Usamos o resto da divisão do contador `i` por 2. Sendo o resto da divisão = 0, é por que o número é par: `i % 2 == 0`.
    - Sendo par, mostra no `console.log`.
    - Não sendo, volta e faz outra passagem no laço até que contador seja igual ao alvo.

```jsx
for(let i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
```

### 1067

**Problema:** Leia um valor inteiro X (1 <= X <= 1000). Em seguida mostre os ímpares de 1 até X, um valor por linha, inclusive o X, se for o caso.

Entrada
O arquivo de entrada contém 1 valor inteiro qualquer.

Saída
Imprima todos os valores ímpares de 1 até X, inclusive X, se for o caso.

- Entrada de dados já convertendo o valor pra inteiro usando o `parseInt`. Armazenamos na variável `X`.
- Na sequência, usamos um laço de repetição for iniciando de 1 até o número alvo - digitado pelo usuário e gravamos em `X`. Foi colocado um ‘≤’ pois no enunciado pede pra incluir o próprio número digitado caso ele se encaixe na condição. Nosso contador é a variável `i` que inicia com 1 e ganha +1 a cada passagem do laço até que ele seja ≤ ao nosso número alvo guardado na `X`.
    - Dentro do laço:
        - Há um `if` que faz a validação da condição se o número é ímpar. Para saber se o número é par podemos usar um esquema de resto da divisão. Pegamos o valor atual do contador do laço e fazemos o processo de módulo por 2. Para par, se o resto da divisão for 0 é par; se for o contrário, é ímpar, então colocamos um `!==` para fazer a negação: `i % 2 !== 0`.
        - Se verdadeiro, o `console.log` imprime o número do contador `i`.
        - Se falso, volta e faz o laço novamente e analisa o próximo número.

```jsx
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');    
var X = parseInt(lines.shift());
for(let i = 1; i <= X; i++){
    if(i % 2 !== 0){
        console.log(i);
    }
}
```

### 1078

**Problema:**  Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N: 

1 x N = N      2 x N = 2N        ...       10 x N = 10N

 Entrada
 A entrada contém um valor inteiro N (2 < N < 1000).

 Saída
 Imprima a tabuada de N, conforme o exemplo fornecido.

Leia 1 valor inteiro N (2 < N < 1000). A seguir, mostre a tabuada de N:      
1 x N = N      2 x N = 2N        ...       10 x N = 10N

- Vamos fazer a entrada do valor e já convertê-lo para inteiro usando o `parseInt`.
- Usamos um laço de repetição `for` de 1 até 10 que ganha +1 a cada passagem do laço.
- O `console.log` vai exibir os resultado a cada passagem do laço.
    - Usamos template string - usando a nossa sintaxe dentro de crases/backticks  ````  e `${ }` para formatarmos a nossa tabuada.
    - Na primeira parte usamos o `${i}` para carregar a variável `i` - que usamos como contador do nosso laço de repetição -,  reaproveitamos ela pra formar o início da nossa tabuada.
    - Na segunda, colocamos o ‘x’ e o nosso número alvo (o número digitado pelo usuário), que colocamos dentro da variável `N`, ficando assim a chamada: `${N}`.
    - E na 3ª e última parte do `console.log`, colocamos o ‘ = ’ e fazemos o cálculo dentro do `${ }`. Que seria o contador atual (nesse caso, a variável `i`) * o número digitado pelo usuário, ou seja `N`: `${i * N}`.

```jsx
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var N = parseInt(lines.shift());
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${N} = ${i * N}`);
}
```

# SQL

Criei o hábito de colocar as palavras reservadas do SQL em maiúsculas, e quebrar as linhas conforme vou colocando as declarações, exemplo:

```sql
SELECT *
FROM nomeDaTabela
```

Isso não faz diferença na execução da query, mas ajuda a organizar a sintaxe.

O Beecrowd até o momento só tem a  opção do do banco PostegreSQL, mas pra quem conhece Microsoft SQL, não vai ter dificuldade.

Pra quem usa MySQL e coloca por padrão o `;` no final da sintaxe, aqui pode por ou não que vai funcionar do mesmo jeito.

Pra organizar a minha query, quando é necessário usar um **`INNER JOIN`**, pego o nome da tabela e crio um “apelido” que me lembre o nome da tabela. Por exemplo: a tabela products vira prod.  Esse apelido serve para evitar ambiguidades. Por exemplo: Você precisa fazer um `JOIN` entre as tabelas products e a providers e vai pegar o nome do produto na products e o nome do fornecedor na providers; pra isso você precisa pegar a coluna que traz o nome nas duas, que nesse caso seria a coluna **name**. Isso daria uma ambiguidade na hora de processar essa query; se você colocasse apenas name, o SQL não ia saber se você está falando da tabela produtcts ou providers. É aí que podemos usar os apelidos:

```sql
SELECT prod.name, prov.name
FROM products prod
INNER JOIN providers prov ON (prod.id_providers = prov.id)

```

Algumas pessoas põe letras aleatórias como a, b, c… ou somente a primeira letra do nome da tabela - o que dá certo também, mas pra outra pessoa analisar ou dar manutenção nessa query pode ser mais difícil identificar que tabela é aquela representado por ‘a’.

No `JOIN`, tenho a mania de colocar as condições do `ON` dentro de `( )`. Isso não faz diferença na hora de executar a query, mas acredito ficar mais organizado na hora de analisar a sintaxe.

### 2602

**Problema:** Sua empresa está fazendo um levantamento de quantos clientes estão cadastrados nos estados, porém, faltou levantar os dados do estado do Rio Grande do Sul.

Então você deve Exibir o **nome de todos os clientes** cujo estado seja ‘**RS**’.

- `SELECT` trazendo o nome do cliente que está na tabela de clientes, coluna `name`. Dentro da tabela `customers`. Onde o estado, coluna `state`, seja RS:

```sql
SELECT name 
FROM customers 
WHERE state = 'RS'
```

### 2603

**Problema:** A empresa fará um evento comemorando os 20 anos de mercado, e para isso faremos uma grande comemoração na cidade de Porto Alegre. Queremos também convidar todos os nossos clientes que estão cadastrados nessa cidade.

O seu trabalho é nos passar os **nomes** e os **endereços** dos clientes que moram em 'Porto Alegre', para entregar os convites pessoalmente.

- `SELECT` trazendo as colunas para nome e endereço - colunas `name` e `street`. Na tabela `customers`.
- Onde a cidade - coluna `city`, seja = ‘Porto Alegre’.

```sql
SELECT name, street 
FROM customers 
WHERE city = 'Porto Alegre'
```

### 2604

**Problema:** O setor financeiro da empresa precisa de um relatório que mostre o **código** e o **nome** dos produtos **cujo preço** são **menores que 10** ou **maiores que 100**.

- `SELECT` trazendo o código e o nome dos produtos - colunas **id** e **name**. Na tabela products.
- No `WHERE`, usamos o `OR` para validar as condições - nesse caso pede 1 condição ou outra. Então, o preço, coluna `price`, seja ou < 10 ou > 100.

```sql
SELECT id, name 
FROM products 
WHERE price < 10 OR price > 100
```

### 2605

**Problema:** O setor financeiro precisa de um relatório sobre os fornecedores dos produtos que vendemos. Os relatórios contemplam todas as categorias, mas por algum motivo, os fornecedores dos produtos cuja categoria é a executiva, não estão no relatório.

Seu trabalho é retornar os **nomes dos produtos** e dos **fornecedores** cujo código da categoria é **6**.

- Usaremos `JOIN` e pra isso vamos invocar as tabelas com seus apelidos: `products pro` e `providers prov`.
- No `SELECT`, precisamos do nomes dos produtos, `pro.name` e nomes dos fornecedores `prov.name`.
- No `INNER JOIN` fazemos o relacionamento das tabelas products com a providers apontando dentro da `ON` as colunas que “conversam”, nesse caso as colunas `id_providers` dentro da tabela `products` com a `id` dentro da tabela `providers`.
- E no `WHERE`, pedimos pra filtrar usando a coluna `id_categories` dentro da tabela `products`.

```sql
SELECT pro.name, prov.name 
FROM products pro
INNER JOIN providers prov ON (pro.id_providers = prov.id)
WHERE pro.id_categories = 6
```

### 2606

**Problema:** Quando os dados foram migrados de Banco de Dados, houve um pequeno mal-entendido por parte do antigo DBA.

Seu chefe precisa que você exiba o **código** e o **nome dos produtos**, cuja categoria **inicie com 'super'**.

- Vamos precisar de um `JOIN` então vamos usar as tabelas com seus apelidos: `products pro` e `categories cat`.
- No `SELECT` trazemos as colunas para código do produto e o nome: `pro.id` e `pro.name`.
- Fazemos o `INNER JOIN` fazendo o relacionamento da tabela `products` com a `categories` apontando dentro do `JOIN` as colunas que “conversam”. Nesse caso a id_categories dentro da tabela products e a id dentro da tabela categories.
- No `WHERE` utilizamos o `LIKE` para filtramos o dado na coluna `name` da tabela `categories`. Usamos um `%` no final do nosso nome alvo para indicar que estamos buscando um dado que começa coma essa informação.

```sql
SELECT pro.id, pro.name 
FROM products pro
INNER JOIN categories cat ON (pro.id_categories = cat.id)
WHERE cat.name LIKE 'super%'
```

### 2607

**Problema:**  Todos os meses a empresa pede um relatório das cidades que os fornecedores estão cadastrados. Dessa vez não vai ser diferente, faça uma consulta no Banco de Dados que retorne `todas as cidades` dos fornecedores, mas em `ordem alfabética`.

OBS: Você não deve mostrar cidades repetidas.

- Para não trazer as repetidas, usamos o `DISTINCT` no começo do `SELECT` apontando a coluna `city`.
- O `ORDER BY` com a coluna `city` é o que vai fazer com que os dados venham em ordem alfabética.

```sql
SELECT DISTINCT city 
FROM providers
ORDER BY city
```

### 2608

**Problema:** O setor financeiro da nossa empresa, está querendo saber os **menores** e **maiores** valores dos produtos, que vendemos. Para isso exiba somente o maior e o menor preço da tabela produtos.

- Chamamos a funções `MAX` e a `MIN` e no escopo dela colocamos a nossa coluna alvo, nesse caso a `price`.

```sql
SELECT MAX(price),MIN(price) 
FROM products
```

### 2609

**Problema:** Como de costume o setor de vendas está fazendo uma análise de quantos produtos temos em estoque, e você poderá ajudar eles. Então seu trabalho será exibir o **nome** e a **quantidade de produtos** de cada uma **categoria**.

- Vamos usar as tabelas com apelidos: `produtcts prod` e `categories cat`.
- No `SELECT` colocamos as colunas que precisaremos, no caso a `name`.
    - Para fazermos o somatório, vamos chamar a função `SUM` e dentro do escopo dela apontarmos os dados que precisamos, nesse caso são os valores da coluna `prod.mount`.
- Fazemos o `JOIN` relacionando a tabela `products` com a `categories` apontando dentro do `ON` o relacionamento delas: a coluna `id_categories` dentro da tabela `products` e a `id` dentro da tabela `categories`.
- Agrupamos os resultados usando o `GROUP BY`, levando em consideração a coluna `name` da tabela `categories`.

```sql
SELECT cat.name, SUM(prod.amount)
FROM products prod
INNER JOIN categories cat ON (prod.id_categories = cat.id)
GROUP BY cat.name
```

### 2610

**Problema:** Na empresa que você trabalha está sendo feito um levantamento sobre os valores dos produtos que são comercializados.
Para ajudar o setor que está fazendo esse levantamento você deve **calcular e exibir** o **valor médio do preço** dos produtos.
OBS: Mostrar o valor com dois números após o ponto.

A `AVG` fará o trabalho de calcular a média. Dentro dela colocamos a nossa coluna alvo, nesse caso a price. O `round` é que dará o procedimento de arredondamento então colocamos a sintaxe da `AVG` dentro dele e antes de fechar colocamos `,` e o número de pontos após a vírgula que queremos, que no caso do enunciado desse exercício é 2.

```sql
SELECT round(AVG(price),2)
FROM products
```

### 2614

**Problema:** A vídeo locadora está fazendo seu relatório semestral e precisa da sua ajuda. Basta você selecionar o **nome dos clientes** e a **data de locação**, das locações realizadas no **mês de setembro de 2016.**

- Como precisamos de dados de duas tabelas relacionadas, vamos fazer um JOIN.
- Para evitar ambiguidades, colocamos apelidos nas tabelas. Por exemplo: **customers custo** e **rentals rent**. Sendo assim, na hora de chamarmos elas pela primeira vez, declaramos assim:

```sql
FROM customers custo
```

```sql
INNER JOIN rentals rent
```

No INNER JOIN, na parte do ON, precisamos explicar para o SQL quais são as colunas que faz o relacionamento dessa tabela. Precisamos mostrar que os valores de `id` dentro da tabela customers e  `id_customers` dentro da tabela rentals são os mesmos. Então fazemos assim:

```sql
INNER JOIN rentals rent ON (custo.id = rent.id_customers)
```

>[!NOTE]
>Nesse caso, tanto faz usar `JOIN` ou `INNER JOIN`.

- Por último, vamos colocar nas condições do `WHERE` o período que foi pedido no enunciado: setembro de 2016. Vamos usar o `BETWEEN`. O `BETWEEN` pede que você coloque os intervalos dentro de um `AND`. Para pegar todo o período de setembro, vamos informar do dia 1º ao último dia desse mês: de 01/09/2016 à 30/09/2016:

```sql
WHERE rent.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'
```

```sql
SELECT custo.name, rent.rentals_date
FROM customers custo
INNER JOIN rentals rent ON (custo.id = rent.id_customers)
WHERE rent.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'
```

Um jeito de fazer sem o `BETWEEN` é extraindo o mês de dentro do dado. Nesse caso, mês de setembro: 9.

```sql
WHERE EXTRACT(MONTH FROM rent.rentals_date) = 9
```

### 2616

**Problema:** A locadora pretende fazer uma promoção para os clientes que ainda não fizeram nenhuma locação.
Seu trabalho é nos entregar o **ID** e o **nome dos clientes** que **não realizaram** nenhuma locação. **Ordene a saída por ID.**

- Vamos incluir no select os dados pedido no enunciado com o id e o nome dos clientes trazendo as colunas `id` e `name`.
- Os dados da locação ficam armazenados na tabela locations. Então, no `WHERE`, vamos colocar a condição `NOT EXISTS`  - que significa não existe. Junto com ela, colocamos um `SELECT` para trazer um relacionamento da dos id de clientes que estão na tabela locations e na tabela customers. Como colocamos o `NOT EXISTS` no `WHERE` o resultado da query vai trazer todos que **não** se encaixam nesse último `SELECT`.

```sql
SELECT id, name
FROM customers
WHERE NOT EXISTS
(SELECT NULL
FROM locations
WHERE locations.id_customers = customers.id
LIMIT 1)
```

### 2619

**Problema:** A nossa empresa está querendo fazer um novo contrato para o fornecimento de novos produtos superluxuosos, e para isso precisamos de alguns dados dos nossos produtos.
Seu trabalho é exibir o **nome dos produtos**, **nome dos fornecedores** e o **preço**, para os produtos cujo **preço** seja **maior que 1000** e sua **categoria** seja ‘**Super Luxury**’.

- Colocamos as tabelas que vamos precisar com o seus apelidos: `products prod` para produtos, `providers prov` para fornecedores, `categories cat` para categoria.
- No começo do `SELECT` colocamos as colunas que devemos exibir: nome do produto, nome do fornecedor e o preço do produto.
- No primeiro `JOIN` fazemos o relacionamento da tabela products com a providers  apontando o que elas tem de comum dentro do `ON`: dentro da tabela `products`, o `id_providers` que identifica o fornecedor do produto com `id` dentro da tabela `providers` que identifica o fornecedor.
- No `WHERE` colocamos a primeira condição relacionado ao preço. E a segunda condição relacionado ao nome da categoria.

```sql
SELECT prod.name, prov.name, prod.price
FROM products prod
JOIN providers prov ON (prod.id_providers = prov.id)
JOIN categories cat ON(prod.id_categories = cat.id)
WHERE prod.price > 1000 
AND cat.name = 'Super Luxury'
```

O nome da categoria também poderia ser buscado utilizando um `LIKE` assim:

```sql
AND cat.name LIKE 'Super Luxury'
```

### 2620

**Problema:** A auditoria financeira da empresa está pedindo para nós um relatório do primeiro semestre de 2016. Então exiba o **nome dos clientes** e o **número do pedido** para os clientes que fizeram pedidos no **primeiro semestre de 2016**.

- Precisamos fazer um `JOIN` entre as tabelas e pra isso vamos utiliza-las com seus apelidos: `customers custo` e `orders ord`.
- Na primeira linha do `SELECT` informamos as colunas que queremos trazer os dados. Neste caso a `custo.name` para para o nome dos clientes e a `ord.id` para o número do pedido.
- No `JOIN` vamos fazer o relacionamento da `customers` com a `orders` apontando dentro do `ON` as colunas de relacionamento que são o `id` do cliente dentro da cliente e `id_customers` dentro da orders.
- No `WHERE` filtramos a data do pedido usando um `BETWEEN`. No enunciado pede primeiro semestre de 2016, então temos que colocar o intervalo de 01/01/2016 até 30/06/2016.

```sql
SELECT custo.name, ord.id
FROM customers custo
JOIN orders ord ON (custo.id = ord.id_customers)
WHERE ord.orders_date BETWEEN '2016-01-01' AND '2016-06-30'
```

### 2623

**Problema:** O setor de vendas precisa de um relatório para saber quais produtos estão sobrando em estoque.

Para você ajudar o setor de vendas, exiba o **nome do produto** e o **nome da categoria**, para os produtos cuja **quantidade** seja **maior que 100** e o **código da categoria seja 1,2,3,6** ou **9**. Mostre essas informações em **ordem crescente** pelo **código da categoria**.

- Utilizaremos as tabelas com seus apelidos: **products prod** e **categories cat**.
- Apontamos no começo do `SELECT` as colunas que queremos exibir: `prod.name` e `cat.name`.
- Indicamos no `JOIN` o relacionamento das tabelas `products` e `categories`.
- No `WHERE` apontamos os filtros que queremos:
    - Produtos com a quantidade, ou seja, a coluna `prod.amount` > 100.
    - Para filtramos uma lista de itens para filtrar, usamos o `IN`. Categorias cujo o `id` estejam dentro da lista: 1, 2, 3, 6 ou 9.
- Tudo ordenado por `cat.id`.

```sql
SELECT prod.name, cat.name
FROM products prod
JOIN categories cat ON (prod.id_categories = cat.id)
WHERE prod.amount > 100
AND cat.id IN (1,2,3,6,9)
ORDER BY cat.id
```

Acima também poderíamos informar o complemento `ASC` para mostrar em ordem crescente:

```sql
ORDER BY cat.id ASC
```

Mas, quando é utilizado o `ORDER BY` e não é informado o padrão crescente `ASC` ou decrescentes `DESC` o sistema entendem que você deseja trazer em ordem crescente.

### 2625

**Problema:** Os diretores do setor de comunicação da sua empresa querem um relatório sobre os dados dos clientes físicos que estão cadastrados no banco de dados. Porem o antigo relatório teve um problema. Os dados do CPF dos clientes vieram sem a máscara.
Por isso seu trabalho agora é selecionar todos os CPFs de todos os clientes, e aplicar uma máscara sobre o retorno dos dados.
A máscara do CPF é parecida com: '000.000.000-00'.

Vamos precisar usar uma substring. Para saber mais acesse [Substring]([SUBSTRING (Transact-SQL) - SQL Server | Microsoft Learn](https://learn.microsoft.com/pt-br/sql/t-sql/functions/substring-transact-sql?view=sql-server-ver16))

`CONCAT` serve para juntar duas ou mais partes de informação. Dentro da sintaxe do `CONCAT` vamos chamar a `SUBSTRING` onde passamos a coluna alvo, nesse caso `cpf`. Precisamos inserir no retorno do `SELECT` 2 `.` e um `-`. Precisamos fazer isso aos poucos. Na primeira parte, à partir do 1 caractere contamos 3 caracteres (incluindo ele mesmo) e colocamos um `.`. Depois, entre o 4, contamos 3 caracteres e colocamos outro `.` . À partir do 7, contamos mais 3 e colocamos o `-`.  Depois é só finalizar com o restante dos caracteres.

```sql
SELECT CONCAT(SUBSTRING(cpf,1,3),'.',
              SUBSTRING(cpf,4,3),'.',
              SUBSTRING(cpf,7,3),'-',
              SUBSTRING(cpf,10,2))
FROM natural_person;
```

### 2744

**Problema:** Você foi contratado para dar consultoria a uma empresa. Analisando o banco de dados você notou que as senhas gravadas dos usuários estão em formato de texto, sendo que isso pode gerar uma falha de segurança, uma vez que elas não estão criptografadas.
Por tanto você deve selecionar o **id**, a **senha atual** e a **senha transformada em MD5** de cada usuário na tabela account.

- Identificamos as colunas que precisamos: **`id`**, `password`, e a `MD5`.
    - Na função MD5, passamos em seu escopo o que desejamos transformar. Nesse caso, a coluna `password`.

```sql
SELECT id, password, MD5(password)
FROM account
```