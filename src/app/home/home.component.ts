import {
  animate,
  animateChild,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, ElementRef, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SideProject } from "@core/models/side-project";
import { SideProjectService } from "@core/side-project.service";
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
  @ViewChild("projectsSection", { read: ElementRef })
  projectsSection!: ElementRef;
  sideProjects$: Observable<SideProject[]>;

  constructor(
    private sideProjectService: SideProjectService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.getSideProjects();
    this.title.setTitle("Portfolio - Pedro Veloso");
  }

  getSideProjects(): void {
    this.sideProjects$ = this.sideProjectService.getSideProjects();
  }

  goToProjects(): void {
    this.projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
