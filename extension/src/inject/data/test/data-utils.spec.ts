import { TitleType } from "../../types";
import { computePercentile } from "../data-utils";

describe("computePercentile", () => {
  it("series - basic", () => {
    const result = computePercentile(TitleType.series, 7.4);
    expect(result).toBe(58);
  });

  it("movies - basic", () => {
    const result = computePercentile(TitleType.movie, 7.4);
    expect(result).toBe(86);
  });

  it("min", () => {
    const result = computePercentile(TitleType.movie, 0);
    expect(result).toBe(0);
  });
  it("max", () => {
    const result = computePercentile(TitleType.movie, 10);
    expect(result).toBe(100);
  });
  it("gap value", () => {
      // gap values is not present between between percentile ratings
    const result = computePercentile(TitleType.movie, 3.1);
    expect(result).toBe(2);
  });

});
