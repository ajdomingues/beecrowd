SELECT custo.name, ord.id
FROM customers custo
JOIN orders ord
ON (custo.id = ord.id_customers)
WHERE ord.orders_date BETWEEN '2016-01-01' AND '2016-06-30'