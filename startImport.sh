#! /bin/bash

set -x

time docker exec -it imdb-neo4j_neo4j_1 cypher-shell -f /opt/my-scripts/import.cypher

for run in $(seq ${CLEANUP_CNT:-40}); do
    time docker exec -it imdb-neo4j_neo4j_1 cypher-shell -f /opt/my-scripts/cleanup.cypher
done