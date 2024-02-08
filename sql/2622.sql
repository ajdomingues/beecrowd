SELECT custo.name 
FROM customers custo
INNER JOIN legal_person legal
ON (custo.id = legal.id_customers)
WHERE legal.cnpj IS NOT NULL