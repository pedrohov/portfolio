import { Component, Input } from "@angular/core";
import { SideProject } from "@core/models/side-project";

@Component({
  selector: "[side-project]",
  templateUrl: "./side-project.component.html",
  styleUrls: ["./side-project.component.scss"],
})
export class SideProjectComponent {
  @Input() sideProject: SideProject;

  constructor() {}
}
