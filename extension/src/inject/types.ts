export interface PercentilePoint {
    percentile: number;
    rating: number;
}

export interface GenrePercentile extends PercentilePoint {
    genre: string;
}

export interface RawPercentilePoint {
    percentile: string;
    rating: string;
}

export enum TitleType {
    movie = "movie",
    series = "tvSeries",
    episode = "tvEpisode",
}

export interface TitleId {
    type: TitleType;
    tconst: string;
}


