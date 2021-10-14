import { test } from "./data";
import { getTitleId } from "./page-utils";

console.log("Hello from IMDb percentile");
var readyStateCheckInterval = setInterval(function () {
  if (document.readyState === "complete") {
    clearInterval(readyStateCheckInterval);
    start();
  }
}, 10);

function start() {
  console.log("Hello. This message was sent from scripts/inject.js");
  const titleId = getTitleId();
  console.log("TitleId=", titleId);
}
