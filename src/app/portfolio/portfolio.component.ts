import { Component, HostBinding, OnInit } from '@angular/core';
import { Project } from '../model/project';
import { ProjectService } from '../services/project.service';

import { trigger, style, transition, animate, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('portfolioTrigger', [
      transition('* => *', [
        query('.project-card', [
          style({ marginTop: '-15px', opacity: 0 }),
          stagger(200, [animate('350ms ease-in-out')])
        ])
    ]),
  ]),
  ]
})

export class PortfolioComponent implements OnInit {

  projects: Project[];

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects()
      .subscribe(projects => this.projects = projects);
  }

}
