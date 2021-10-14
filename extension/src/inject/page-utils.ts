import { TitleId, TitleType } from "./types";

export function getTitleId(): TitleId | undefined {
  const path = window.location.pathname;
  // /title/tt1160419/
  const tconst = path;
  return {
    // TODO
    type: TitleType.movie,
    tconst,
  };
}
