import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahv-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.scss']
})
export class AgeComponent implements OnInit {

  max = 70;
  min = 64;
  step = 1;
  value = 65;

  constructor() { }

  ngOnInit() {
  }

}
