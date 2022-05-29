import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Project } from "../model/project";
import { ProjectService } from "../services/project.service";

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
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.getProject();
    this.selected = this.getSource();
    this.changed = false;
  }

  getProject(): void {
    let title = this.route.snapshot.paramMap.get("title");
    this.projectService
      .getProject(title)
      .subscribe((project) => (this.project = project));
  }

  getSource(): string {
    return (
      this.project.thumbnail.substr(0, this.project.thumbnail.indexOf("-")) +
      ".jpg"
    );
  }

  changeImage(pic): void {
    this.selected = pic;
    this.changed = true;
  }
}
