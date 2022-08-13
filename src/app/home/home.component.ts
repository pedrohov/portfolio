import {
  animate,
  animateChild,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, ElementRef, OnDestroy, ViewChild } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { SideProject } from "@core/models/side-project";
import { SideProjectService } from "@core/side-project.service";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

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
export class HomeComponent implements OnDestroy {
  @ViewChild("projectsSection", { read: ElementRef })
  projectsSection!: ElementRef;
  sideProjects$: Observable<SideProject[]>;
  private isComponentDestroyed$ = new Subject<boolean>();

  constructor(
    private sideProjectService: SideProjectService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.getSideProjects();
    this.title.setTitle("Portfolio - Pedro Veloso");
  }

  getSideProjects(): void {
    this.sideProjects$ = this.sideProjectService
      .getSideProjects()
      .pipe(takeUntil(this.isComponentDestroyed$));
  }

  goToProjects(): void {
    this.projectsSection.nativeElement.scrollIntoView({ behavior: "smooth" });
  }

  ngOnDestroy(): void {
    this.isComponentDestroyed$.next(true);
    this.isComponentDestroyed$.complete();
  }
}
