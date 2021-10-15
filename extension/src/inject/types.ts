export interface PercentilePoint {
    percentile: number;
    rating: number;
}

export interface RawPercentilePoint {
    percentile: string;
    rating: string;
}

export enum TitleType {
    movie = "movie",
    series = "tvSeries"
}

export interface TitleId {
    type: TitleType;
    tconst: string;
}


