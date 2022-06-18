import { Component, Input } from "@angular/core";
import { Project } from "@core/models";

@Component({
  selector: "next-project",
  templateUrl: "./next-project.component.html",
  styleUrls: ["./next-project.component.scss"],
})
export class NextProjectComponent {
  @Input() project: Project;
}
