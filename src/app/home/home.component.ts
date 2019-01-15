import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeTrigger', [
      transition('* => *', [
          style({ opacity: 0 }),
          animate('750ms ease-in-out'), animateChild()
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
