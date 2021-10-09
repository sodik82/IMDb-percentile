// clear everything with too less votes (note: majority is without any vote)
// needs to be executed multiple times (due to memory)
MATCH (n:Titles)
WHERE n.numVotes < 1000 OR n.numVotes IS NULL
WITH n LIMIT 500000
DELETE n;
