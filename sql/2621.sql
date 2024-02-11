SELECT pro.name 
FROM products pro
INNER JOIN providers prov ON (pro.id_providers = prov.id)
WHERE pro.amount BETWEEN 10 AND 20 
AND prov.name LIKE 'P%'