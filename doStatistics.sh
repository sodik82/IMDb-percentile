#! /bin/bash

set -x

for P in {0..100} ; do
    docker exec -it imdb-neo4j_neo4j_1 cypher-shell "MATCH (n:Titles) RETURN toFloat($P) / 100, percentileDisc(n.avgRating, toFloat($P) / 100)"
done