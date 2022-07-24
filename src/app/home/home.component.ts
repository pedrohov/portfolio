import { Component, ElementRef, ViewChild } from "@angular/core";
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
import { Title } from "@angular/platform-browser";

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
    this.getProjects();
    this.title.setTitle("Portfolio - Pedro Veloso");
  }

  getProjects(): void {
    this.sideProjects$ = this.sideProjectService.getSideProjects();
  }

  goToProjects(): void {
    this.projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }
}
