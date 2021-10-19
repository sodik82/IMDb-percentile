import {
  GenrePercentile,
  PercentilePoint,
  RawPercentilePoint,
  TitleId,
  TitleType,
} from "../types";
import { seriesByGenre } from "./seriesbyGenreData";
import { moviesRaw } from "./moviesData";
import { seriesRaw } from "./seriesData";
import { moviesByGenre } from "./data";

function fromRawData(p: RawPercentilePoint): PercentilePoint {
  return {
    percentile: Math.round(parseFloat(p.percentile) * 100),
    rating: parseFloat(p.rating),
  };
}

export function computePercentile(type: TitleType, rating: number): number {
  let raw: RawPercentilePoint[] | undefined = undefined;
  switch (type) {
    case TitleType.series:
    case TitleType.episode:
      raw = seriesRaw;
      break;
    case TitleType.movie:
      raw = moviesRaw;
      break;
    default:
      console.log("Unknown type " + type);
      return -1;
  }
  const data = raw.map(fromRawData);
  return compute(data, rating);
}

export function computePercentileByGenre(
  type: TitleType,
  genre: string,
  rating: number
): number {
  let raw: GenrePercentile[] | undefined = undefined;
  switch (type) {
    case TitleType.series:
    case TitleType.episode:
      raw = seriesByGenre;
      break;
    case TitleType.movie:
      raw = moviesByGenre;
      break;
    default:
      console.log("Unknown type " + type);
      return -1;
  }
  const data = seriesByGenre.filter((p) => p.genre.toLowerCase() === genre);
  if (data.length === 0) {
    return -1;
  }
  return compute(data, rating);
}

function compute(distribution: PercentilePoint[], rating: number): number {
  const idx = distribution.findIndex((point) => point.rating >= rating);
  if (idx < 0) {
    return 100;
  }
  return distribution[idx].percentile;
}
