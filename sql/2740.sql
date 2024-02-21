(SELECT CONCAT('Podium: ', team) AS name
FROM league
ORDER BY position ASC LIMIT 3)
UNION ALL
(SELECT CONCAT('Demoted: ', team) AS name
FROM league
ORDER BY position LIMIT 2 OFFSET 13);
