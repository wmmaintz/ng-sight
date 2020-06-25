import { Component, OnInit, Input } from '@angular/core';
import { Server } from '../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
})
export class ServerComponent implements OnInit {

  constructor() { }

  color: string;
  buttonText: string;

  @Input() serverInput: Server;

  ngOnInit(): void {
    this.setServerStatus(this.serverInput.isOnLine);
  }

  setServerStatus(isOnLine: boolean) {
    if (isOnLine){
      this.serverInput.isOnLine = true;
      this.color = '#66bb6a';
      this.buttonText = 'Shut Down';
    }
    else {
      this.serverInput.isOnLine = false;
      this.color = '#ff6b6b';
      this.buttonText = 'Start';    }
  }

  toggleStatus(onLineStatus: boolean) {
    console.log(this.serverInput.name, ':', onLineStatus);
    this.setServerStatus(!onLineStatus);
  }
}
