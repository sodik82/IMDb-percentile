import { TitleId, TitleType } from "./types";

export function getTitleId(): TitleId | undefined {
  const path = window.location.pathname;
  const tconst = getIdFromUrl(path);
  if (!tconst) {
    return undefined;
  }
  const episodes = document.getElementsByClassName("episode-guide-text");
  return {
    type: episodes.length > 0 ? TitleType.series : TitleType.movie,
    tconst,
  };
}

export function getIdFromUrl(urlPath: string): string | undefined {
  const found = urlPath.match(/\/title\/(\w+)\//);
  return found ? found[1] : undefined;
}
