import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  todo : string[];

  constructor() { }

  ngOnInit() {
  }

addTask(task) {
console.log(task);
	this.todo.push(task);
}
}