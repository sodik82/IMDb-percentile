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

MATCH (n:Titles{titleType: 'tvSeries'}) 
    WHERE n.numVotes > 10000
    AND 'Mystery' in n.genres 
    RETURN n 
    ORDER BY n.avgRating DESC 
    LIMIT 25

MATCH (n:Titles) UNWIND n.genres AS genres WITH DISTINCT genres RETURN genres
```

### Manipulation

```
MATCH (n:Titles) DELETE n
```