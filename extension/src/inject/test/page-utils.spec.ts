import { extractGenreFromUrl, getIdFromUrl } from "../page-utils";

describe("getIdFromUrl", () => {
  it("get nothing from home page", () => {
    expect(getIdFromUrl("")).toBe(undefined);
  });

  it("works for title urls", () => {
    expect(getIdFromUrl("/title/tt1160419/")).toBe("tt1160419");
  });

  it("does not work for actor urls", () => {
    expect(getIdFromUrl("/name/nm3154303/")).toBe(undefined);
  });
});

describe("extractGenreFromUrl", () => {
  it("get nothing from home page", () => {
    expect(extractGenreFromUrl(undefined)).toBe(undefined);
  });

  it("works with chip url path", () => {
    expect(
      extractGenreFromUrl(
        "/search/title?genres=action&explore=title_type,genres&ref_=tt_ov_inf"
      )
    ).toBe("action");
  });
});
