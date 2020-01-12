import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-persion',
  templateUrl: './persion.component.html',
  styleUrls: ['./persion.component.css']
})
export class PersionComponent implements OnInit {

@Input() name:string;
@Input()age: number;
  constructor() { }

  ngOnInit() {
  }

}