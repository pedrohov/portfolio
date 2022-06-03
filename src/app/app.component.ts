import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import {
  trigger,
  style,
  transition,
  animate,
  state,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("toggleMenu", [
      state("open", style({ maxHeight: "180px" })),
      state("closed", style({ maxHeight: "0" })),
      transition("open <=> closed", [animate("0.3s ease-out")]),
    ]),
  ],
})
export class AppComponent {
  toggleState: boolean = false;

  toggle() {
    this.toggleState = !this.toggleState;
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
}
