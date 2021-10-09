#! /bin/bash

time docker exec -it imdb-neo4j_neo4j_1 cypher-shell -f /opt/my-scripts/import.cypher
