import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../model/project';

@Component({
  selector: '[project-card]',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {

    @Input() project;

    constructor() { }

    ngOnInit() { }

}
