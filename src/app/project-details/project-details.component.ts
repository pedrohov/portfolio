import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Project } from "@core/models/project";
import { ProjectService } from "@core/project.service";

@Component({
  selector: "app-project-details",
  templateUrl: "./project-details.component.html",
  styleUrls: ["./project-details.component.scss"],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project;
  selected: String;
  changed: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.getProject();
  }

  getProject(): void {
    const title = this.route.snapshot.paramMap.get("title");
    this.projectService.getProject(title).subscribe(
      (project: Project) => {
        this.project = project;
        this.selected = this.project.thumbnail;
        this.changed = false;
      },
      () => {
        this.router.navigate(["/"]);
      }
    );
  }

  changeImage(pic: String): void {
    this.selected = pic;
    this.changed = true;
  }
}
