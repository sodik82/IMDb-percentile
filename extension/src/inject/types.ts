export interface PercentilePoint {
    percentile: number;
    rating: number;
}

export enum TitleType {
    movie = "movie",
    series = "tvSeries"
}

export interface TitleId {
    type: TitleType;
    tconst: string;
}


