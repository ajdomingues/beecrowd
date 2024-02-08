/*A auditoria financeira da empresa está pedindo para nós um relatório do primeiro semestre de 2016. Então exiba o nome dos clientes e o número do pedido para os clientes que fizeram pedidos no primeiro semestre de 2016.*/

SELECT custo.name, ord.id
FROM customers custo
JOIN orders ord
ON (custo.id = ord.id_customers)
WHERE ord.orders_date BETWEEN '2016-01-01' AND '2016-06-30'