SELECT pro.id, pro.name 
FROM products pro
INNER JOIN categories cat ON (pro.id_categories = cat.id)
WHERE cat.name LIKE 'super%'