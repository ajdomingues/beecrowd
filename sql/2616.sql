SELECT id, name
FROM customers
WHERE NOT EXISTS
(SELECT NULL
FROM locations
WHERE locations.id_customers = customers.id
LIMIT 1)
