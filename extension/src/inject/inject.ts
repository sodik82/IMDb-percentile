import { computePercentile } from "./data/data-utils";
import { getRating, getTitleId, setPercentile } from "./page-utils";

console.log("Hello from IMDb percentile");
var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    start();
  }
}, 100);

function start() {
  const titleId = getTitleId();
  const rating = getRating();
  console.log("percentile info", { titleId, rating });
  if (rating && titleId) {
    const percentile = computePercentile(titleId.type, rating)
    setPercentile(percentile);
  }
}
