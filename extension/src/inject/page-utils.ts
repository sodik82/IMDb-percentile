import { greenToRed } from "./colors";
import { computePercentileByGenre } from "./data/data-utils";
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
  if (episode) {
    return TitleType.episode;
  }
  // currently I haven't found anything specific to movies (but it might bring false positives)
  return TitleType.movie;
}

function getGenreChips(): Element[] {
  const container = getByTestId("genres");
  const chips = container?.querySelectorAll("A");
  return chips ? new Array(...chips) : [];
}

function getGenreForChip(chip: Element): string | undefined {
  const url = chip.getAttribute("href");
  return extractGenreFromUrl(url ?? undefined);
}

function enhanceChip(chip: Element, percentile: number) {
  if (percentile < 0) {
    return;
  }
  chip.innerHTML = chip.innerHTML + "&nbsp;" + generateHtml(percentile);
}

export function enhanceGenreChips(type: TitleType, rating: number): void {
  const chips = getGenreChips();
  const genres = chips.map(getGenreForChip);
  const percentiles = genres.map((g) =>
    g ? computePercentileByGenre(type, g, rating) : -1
  );
  console.log("[I%] genres", genres, percentiles);
  percentiles.forEach((p, idx) => enhanceChip(chips[idx], p));
}

export function extractGenreFromUrl(urlPath?: string): string | undefined {
  if (!urlPath) {
    return undefined;
  }
  const found = urlPath.match(/genres=(\w+)\&/);
  return found ? found[1] : undefined;
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
  sybling.innerHTML = generateHtml(value, title);
}

function generateHtml(percentile: number, title?: string): string {
  const color = greenToRed(100 - percentile, true);
  return `<b style="color: ${color}" title="${title ?? ""}">${percentile}%</b>`;
}

function getRatingElement() {
  return getByTestId("hero-rating-bar__aggregate-rating__score");
}

function getByTestId(dataTestId: string) {
  return document.querySelector(`[data-testid='${dataTestId}']`);
}
