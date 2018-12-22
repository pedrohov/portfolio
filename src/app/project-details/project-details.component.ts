import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  animations: [
    trigger('fadeInRight', [
      transition('* => *', [
        query('img', [
          style({ opacity: 0/*, paddingLeft: '100vw' */}),
          animate('500ms ease-in-out')
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
  ) { }

  ngOnInit() {
    this.getProject();
  }

  getProject(): void {
    let title = this.route.snapshot.paramMap.get('title');
    this.projectService.getProject(title)
      .subscribe(project => this.project = project);
  }

}
