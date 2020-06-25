import { Component, OnInit } from '@angular/core';
import { Server } from '../../models/server';

const SAMPLE_SERVERS = [
  {id: 1, name: 'dev-web', isOnLine: true },
  {id: 2, name: 'dev-mail', isOnLine: false },
  {id: 3, name: 'qa-web', isOnLine: true },
  {id: 4, name: 'qa-mail', isOnLine: true },
  {id: 5, name: 'prod-web', isOnLine: true },
  {id: 6, name: 'prod-mail', isOnLine: true }
];


@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.less']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers: Server[] = SAMPLE_SERVERS;

  ngOnInit(): void {
  }

}
