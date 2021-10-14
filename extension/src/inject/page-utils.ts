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

export function getRating() {
    const el = document.querySelector("[data-testid='hero-rating-bar__aggregate-rating__score']")
    if (!el) {
        return undefined
    }
    // @ts-ignore
    const text = el.children[0].innerText;
    return parseFloat(text);
}
