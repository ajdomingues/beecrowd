SELECT city_name, population 
FROM cities 
WHERE population IN( 
(SELECT population 
FROM cities
ORDER BY population DESC
LIMIT 1 OFFSET 1),
(SELECT population 
FROM cities
ORDER BY population 
LIMIT 1 OFFSET 1) 
 ) 
 ORDER BY population DESC