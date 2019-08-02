import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  collection = [
    {value: 1, description: 'uno', note: 'ABA110511ABC'},
    {value: 2, description: 'dos', note: 'BBA110511ABC'},
    {value: 3, description: 'tres', note: 'CBA110511ABC'},
    {value: 4, description: 'cuatro', note: 'DBA110511ABC'}
  ];

  isOpened = false;

  dato: any;

  sel = { value: 1, description: "", rfc: "" };

  constructor() { }

  ngOnInit() {
    this.dato = 0;
  }

  updateEvent(e: any) {
    console.log(e);
  }

  alertData() {
    console.log(this.dato);
  }

  openedSelect() {
    this.isOpened = true;
    console.log('hello!');

  }

  closedSelect() {
    this.isOpened = false;
    console.log('hello!');

  }

}
