/*A locadora pretende fazer uma promoção para os clientes que ainda não fizeram nenhuma locação.
Seu trabalho é nos entregar o ID e o nome dos clientes que não realizaram nenhuma locação. Ordene a saída por ID.*/

SELECT id, name
FROM customers
WHERE NOT EXISTS
(SELECT NULL
FROM locations
WHERE locations.id_customers = customers.id
LIMIT 1)
