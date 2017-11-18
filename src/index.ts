import * as Rx from "rxjs";

const button = document.querySelector(".button")!;
const stream = Rx.Observable.fromEvent(button, "click").scan(
  (count: string) => count + "a",
  0,
);
stream.subscribe(console.log);
