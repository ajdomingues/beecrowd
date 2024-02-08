/*A nossa empresa está querendo fazer um novo contrato para o fornecimento de novos produtos superluxuosos, e para isso precisamos de alguns dados dos nossos produtos.
Seu trabalho é exibir o nome dos produtos, nome dos fornecedores e o preço, para os produtos cujo preço seja maior que 1000 e sua categoria seja ‘Super Luxury.*/

SELECT prod.name, prov.name, prod.price
FROM products prod
JOIN providers prov
ON (prod.id_providers = prov.id)
JOIN categories cat
ON(prod.id_categories = cat.id)
WHERE prod.price > 1000 
AND cat.name = 'Super Luxury'
