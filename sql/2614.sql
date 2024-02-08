-- A vídeo locadora está fazendo seu relatório semestral e precisa da sua ajuda. Basta você selecionar o nome dos clientes e a data de locação, das locações realizadas no mês de setembro de 2016.

SELECT custo.name, rent.rentals_date
FROM customers custo
INNER JOIN rentals rent
ON (custo.id = rent.id_customers)
WHERE rent.rentals_date BETWEEN '2016-09-01' AND '2016-09-30'