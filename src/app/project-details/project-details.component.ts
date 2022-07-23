import { Component } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { Project } from "@core/models/project";
import { ProjectService } from "@core/project.service";
import { Subscription } from "rxjs";
import { map, filter } from "rxjs/operators";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent {
  project: Project;
  nextProject: Project | undefined;
  selected: String;
  routeSub: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {
    this.routeSub = router.events
      .pipe(
        filter((e) => e instanceof NavigationEnd),
        map((e) => e as NavigationEnd)
      )
      .subscribe(() => {
        this.getProject();
      });
  }

  getProject(): void {
    const title = this.route.snapshot.paramMap.get("title");
    this.projectService.getProject(title).subscribe(
      (project: Project) => {
        this.project = project;
        this.selected = this.project.thumbnail;
        document.title = `${project.title} - Pedro Veloso`;
        this.projectService
          .getNextProjectAfter(this.project)
          .subscribe((nextProject) => {
            this.nextProject = nextProject;
          });
      },
      () => {
        this.router.navigate(["/"]);
      }
    );
  }
}
