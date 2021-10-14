import { getIdFromUrl } from "../page-utils";

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
