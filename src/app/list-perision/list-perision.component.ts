import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-perision',
  templateUrl: './list-perision.component.html',
  styleUrls: ['./list-perision.component.css']
})
export class ListPerisionComponent implements OnInit {
  
  public arrWords = [
    {name: 'tuấn', age: 18 },
    {name: 'Nam', age: 20 },
    {name: 'Linh', age: 22 },
    {name: 'Hòa', age: 24 },

];

  constructor() { }

  ngOnInit() {
  }

}