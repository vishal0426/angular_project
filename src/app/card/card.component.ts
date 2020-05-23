import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public selected: boolean;
  public title = 'Example Task Title';

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.selected = !this.selected;
  }

}
