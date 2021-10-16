import { greenToRed } from "./colors";
import { TitleId, TitleType } from "./types";

export function getTitleId(): TitleId | undefined {
  const path = window.location.pathname;
  const tconst = getIdFromUrl(path);
  if (!tconst) {
    return undefined;
  }
  const type = getTitleType();
  return type
    ? {
        type,
        tconst,
      }
    : undefined;
}

function getTitleType(): TitleType | undefined {
  const episodes = document.getElementsByClassName("episode-guide-text");
  if (episodes.length > 0) {
    return TitleType.series;
  }
  const episode = getByTestId("hero-subnav-bar-all-episodes-button");
  if(episodes) {
    return TitleType.episode
  }
  // currently I haven't found anything specific to movies (but it might bring false positives)
  return TitleType.movie;
}

export function getIdFromUrl(urlPath: string): string | undefined {
  const found = urlPath.match(/\/title\/(\w+)\//);
  return found ? found[1] : undefined;
}

export function getRating() {
  const el = getRatingElement();
  if (!el) {
    return undefined;
  }
  // @ts-ignore
  const text = el.children[0].innerText;
  return parseFloat(text);
}

export function setPercentile(value: number, title?: string) {
  const el = getRatingElement()!;
  const sybling = el?.children[1];
  if (!sybling) {
    console.warn("Promile - can't set percentile " + value);
    return;
  }
  const color = greenToRed(100 - value, true);
  sybling.innerHTML = `<b style="color: ${color}" title="${
    title ?? ""
  }">${value}%</b>`;
}

function getRatingElement() {
  return getByTestId("hero-rating-bar__aggregate-rating__score");
}

function getByTestId(dataTestId: string) {
  return document.querySelector(`[data-testid='${dataTestId}']`);
}
