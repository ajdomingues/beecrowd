SELECT doc.name, (
ROUND(SUM(att.hours * 150 + wor.bonus * 0.01 * att.hours * 150),1)
)AS salary
FROM doctors doc
JOIN attendances att ON (doc.id = att.id_doctor)
JOIN work_shifts wor ON (att.id_work_shift = wor.id)
GROUP BY doc.name ORDER BY salary DESC;