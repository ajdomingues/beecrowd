SELECT custo.name, rent.rentals_date
FROM customers custo
INNER JOIN rentals rent
ON (custo.id = rent.id_customers)
WHERE rent.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'