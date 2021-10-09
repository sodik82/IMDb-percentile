# IMDB - neo4j

Project to better compare the movies and series based on the relative comparison and not "absolute" rating

## Import data

1. Download and decompress [datasets](https://www.imdb.com/interfaces/) into `import/input`
    * files: `basics.tsv`, `episode.tsv`, `ratings.tsv`
    * convert to csv

```
./tsv2csv < input/ratings.tsv > input/ratings.csv 
./tsv2csv < input/basics.tsv > input/basics.csv 
./tsv2csv < input/episode.tsv > input/episode.csv
```

2. Start Neo4j - `docker-compose up` and optionally [open](http://localhost:7474)
3. Optional - change permissions on `import/input` since neo4j will change the permissons
4. Import data './startImport.sh'

### Start Cypher-shell in docker

```
docker exec -it imdb-neo4j_neo4j_1 bash
# cd /opt/my-scripts/
# cypher-shell -f <file>
```
