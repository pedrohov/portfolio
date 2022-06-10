import { Component } from "@angular/core";
import {
  trigger,
  style,
  transition,
  animate,
  animateChild,
} from "@angular/animations";
import { SideProjectService } from "@core/side-project.service";
import { SideProject } from "@core/models/side-project";
import { Observable } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("fadeTrigger", [
      transition("* => *", [
        style({ opacity: 0 }),
        animate("1s ease-in-out"),
        animateChild(),
      ]),
    ]),
  ],
})
export class HomeComponent {
  sideProjects$: Observable<SideProject[]>;

  constructor(private sideProjectService: SideProjectService) {}

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.sideProjects$ = this.sideProjectService.getSideProjects();
  }
}
