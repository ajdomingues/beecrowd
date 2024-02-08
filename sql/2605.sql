SELECT pro.name, prov.name 
FROM products pro
INNER JOIN providers prov ON (pro.id_providers = prov.id)
WHERE pro.id_categories = 6