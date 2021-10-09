USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM 'file:///basics.csv'
 AS line
 WITH line                           
 LIMIT 40000
 WHERE line.isAdult = '0'  // skip the adult productions
 AND line.titleType = 'tvSeries'
 AND toInteger(line.startYear) > 1990
 MERGE (n:Titles {tconst: line.tconst})  // create node if doesn't exist yet
   ON CREATE SET
		n.titleType =      	line.titleType,
 	   	n.title =          	line.primaryTitle,
 	   	n.originalTitle =  	line.originalTitle,
 	   	n.startYear =      	toInteger(line.startYear),
 	   	n.endYear =        	toInteger(line.endYear),
 	   	n.runtimeMinutes = 	toInteger(line.runtimeMinutes),
 	   	n.genres =         	split(line.genres,',');

CREATE INDEX titles_tconst 
	IF NOT EXISTS
	FOR (n: Titles)
	ON (n.tconst);

USING PERIODIC COMMIT 1000
LOAD CSV WITH HEADERS FROM 'file:///ratings.csv'
 AS line
 WITH line
 LIMIT 40000
 MERGE (n:Titles {tconst: line.tconst})
 ON MATCH SET 
 	n.avgRating = toFloat(line.averageRating),
	n.numVotes = toInteger(line.numVotes);

