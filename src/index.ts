import * as Rx from "rxjs";

const button = document.querySelector(".button")!;
const stream = Rx.Observable.fromEvent(button, "click")
  .throttleTime(1000)
  .scan((count: number) => count + 1, 0);

stream.subscribe(console.log);
