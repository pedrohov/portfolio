import { Component, OnInit } from "@angular/core";
import { Project } from "@core/models/project";
import { ProjectService } from "@core/project.service";

import { Observable } from "rxjs";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
})
export class PortfolioComponent implements OnInit {
  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projects$ = this.projectService.getProjects();
  }
}
