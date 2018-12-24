import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

import { trigger, style, transition, animate, query, stagger, group } from '@angular/animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    trigger('fadeInRight', [
      transition('* => *', [
        group([
          query('img', [
            style({ opacity: 0, marginLeft: '-100vw', transform: 'translateX(100%)' }),
            animate('500ms ease-in-out')
          ]),
          query('.project-wrapper', [
            style({ opacity: 0, transform: 'translateX(50%)' }),
            animate('500ms ease-in-out')
          ])
        ])
      ]),
    ]),
  ]
})

export class ProjectDetailsComponent implements OnInit {

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    let title = this.route.snapshot.paramMap.get('title');
    this.projectService.getProject(title)
      .subscribe(project => this.project = project);
  }

  getSource(): string {
    console.log(this.project.thumbnail.substr(0, this.project.thumbnail.indexOf('-')))
    return this.project.thumbnail.substr(0, this.project.thumbnail.indexOf('-')) + '.jpg';
  }

}
