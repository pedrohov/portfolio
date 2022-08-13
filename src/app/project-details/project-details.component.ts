import { Component, OnDestroy } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Project } from "@core/models/project";
import { ProjectService } from "@core/project.service";
import { EMPTY, Observable, Subject } from "rxjs";
import { catchError, filter, map, takeUntil, tap } from "rxjs/operators";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnDestroy {
  project$: Observable<Project>;
  nextProject$: Observable<Project>;
  private isComponentDestroyed$ = new Subject<boolean>();

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private title: Title,
    private projectService: ProjectService
  ) {
    router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e as NavigationEnd),
        takeUntil(this.isComponentDestroyed$)
      )
      .subscribe(() => this.getProject());
  }

  getProject(): void {
    const title = this.route.snapshot.paramMap.get("title");
    this.project$ = this.projectService.getProject(title).pipe(
      tap((project: Project) => {
        this.title.setTitle(`${project.title} - Pedro Veloso`);
        this.nextProject$ = this.projectService.getNextProjectAfter(project);
      }),
      catchError(() => {
        this.router.navigate(["/"]);
        return EMPTY;
      }),
      takeUntil(this.isComponentDestroyed$)
    );
  }

  ngOnDestroy(): void {
    this.isComponentDestroyed$.next(true);
    this.isComponentDestroyed$.complete();
  }
}
