# Import data 

## Samples

### basics.tsv

tconst	titleType	primaryTitle	originalTitle	isAdult	startYear	endYear	runtimeMinutes	genres
tt0804484	tvSeries	Foundation	Foundation	0	2021	\N	\N	Drama,Sci-Fi
// End episode from Foundation
tt8887492	tvEpisode	The Mathematician's Ghost	The Mathematician's Ghost	0	2021	\N	\N	Drama,Sci-Fi

## Cypher

### Queries

```
MATCH (n:Titles) WHERE 'Drama' in n.genres RETURN n LIMIT 25
```

### Manipulation

```
MATCH (n:Titles) DELETE n
```