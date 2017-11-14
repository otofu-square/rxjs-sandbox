import * as Rx from "rxjs";

const button = document.querySelector("button")!;
const stream = Rx.Observable.fromEvent(button, "click");

stream.subscribe(event => console.log(event));
