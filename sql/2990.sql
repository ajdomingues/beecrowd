SELECT emp.cpf,emp.enome,dep.dnome
FROM departamentos dep 
JOIN  empregados emp ON (dep.dnumero = emp.dnumero)
LEFT JOIN trabalha trab ON (trab.cpf_emp = emp.cpf)
LEFT JOIN projetos proj ON (trab.pnumero = proj.pnumero)
WHERE  proj.pnumero IS NULL
ORDER BY emp.cpf;

-- ou
SELECT emp.cpf, emp.enome, dep.dnome 
FROM empregados emp, departamentos dep
WHERE emp.dnumero = dep.dnumero 
AND emp.cpf NOT IN (SELECT trab.cpf_emp FROM trabalha trab)
ORDER BY emp.cpf;