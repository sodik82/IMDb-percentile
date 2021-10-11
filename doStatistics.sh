#! /bin/bash

for P in {0..100} ; do
    docker exec -it imdb-neo4j_neo4j_1 cypher-shell --format plain "MATCH (n:Titles{titleType: \"${TYPE:-tvSeries}\"}) RETURN toFloat($P) / 100, percentileDisc(n.avgRating, toFloat($P) / 100)"
done