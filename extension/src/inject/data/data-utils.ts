import {
  PercentilePoint,
  RawPercentilePoint,
  TitleId,
  TitleType,
} from "../types";
import { moviesRaw } from "./moviesData";
import { seriesRaw } from "./seriesData";

function fromRawData(p: RawPercentilePoint): PercentilePoint {
  return {
    percentile: parseFloat(p.percentile),
    rating: parseFloat(p.rating),
  };
}

export function computePercentile(type: TitleType, rating: number): number {
  const raw = type === TitleType.series ? seriesRaw : moviesRaw;
  const data = raw.map(fromRawData);
  const idx = data.findIndex(point => point.rating >= rating)
  if (idx < 0) {
      return 100;
  }
  return Math.round(100 * data[idx].percentile);
}
