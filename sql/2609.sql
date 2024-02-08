-- Como de costume o setor de vendas está fazendo uma análise de quantos produtos temos em estoque, e você poderá ajudar eles.
-- Então seu trabalho será exibir o nome e a quantidade de produtos de cada uma categoria.

SELECT cat.name, SUM(prod.amount)
FROM products prod
INNER JOIN categories cat
ON (prod.id_categories = cat.id)
GROUP BY cat.name
