import { Component, OnInit } from "@angular/core";
import { Project } from "@core/models/project";
import { Tag } from "@core/models/tag";
import { ProjectService } from "@core/project.service";
import { TagService } from "@core/tag.service";

import {
  trigger,
  style,
  transition,
  animate,
  query,
  stagger,
  animateChild,
} from "@angular/animations";
import { Observable } from "rxjs";

@Component({
  selector: "app-portfolio",
  templateUrl: "./portfolio.component.html",
  styleUrls: ["./portfolio.component.scss"],
  animations: [
    trigger("portfolioTrigger", [
      transition("* => *", [
        query(
          ":enter",
          [
            style({ marginTop: "-15px", opacity: 0 }),
            stagger(100, [animate("150ms ease-in-out"), animateChild()]),
          ],
          { optional: true }
        ),
      ]),
    ]),
    trigger("fadeTrigger", [
      transition("* => *", [
        style({ opacity: 0 }),
        animate("350ms ease-in-out"),
        animateChild(),
      ]),
    ]),
  ],
})
export class PortfolioComponent implements OnInit {
  projects$: Observable<Project[]>;
  tags: Tag[];

  constructor(
    private projectService: ProjectService,
    private tagService: TagService
  ) {}

  ngOnInit() {
    this.getProjects();
    this.getTags();
  }

  getProjects(): void {
    this.projects$ = this.projectService.getProjects();
  }

  getTags(): void {
    this.tagService.getTags().subscribe((tags) => (this.tags = tags));
  }

  getSelectedTags(): Tag[] {
    return this.tags.filter((tag) => tag.selected === true);
  }
}
