USE wm;
SELECT DISTINCT node_id, 
(CASE
WHEN pointer IS NULL THEN 'LEAF'
WHEN node_id = 50 THEN 'ROOT'
ELSE 'INNER'
END) AS type
FROM nodes
ORDER BY node_id;