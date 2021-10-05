LOAD CSV WITH HEADERS FROM 'file:///basics.tsv'
 AS line FIELDTERMINATOR '\t'
 WITH line                           
 LIMIT 40000
 WHERE line.isAdult = '0'  // skip the adult productions
 AND line.titleType = 'tvSeries'
 MERGE (n:Titles {tconst: line.tconst})  // create node if doesn't exist yet
   ON CREATE SET
     n.titleType =      split(line.titleType,','),
 	   n.title =          line.primaryTitle,
 	   n.originalTitle =  line.originalTitle,
 	   n.startYear =      toInteger(line.startYear),
 	   n.endYear =        toInteger(line.endYear),
 	   n.runtimeMinutes = toInteger(line.runtimeMinutes),
 	   n.genres =         split(line.genres,',')