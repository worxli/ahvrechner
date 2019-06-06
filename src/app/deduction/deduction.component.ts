import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahv-deduction',
  templateUrl: './deduction.component.html',
  styleUrls: ['./deduction.component.scss']
})
export class DeductionComponent implements OnInit {

  max = 12.0;
  min = 8.0;
  step = 0.2;
  value = 8.4;

  constructor() { }

  ngOnInit() {
  }

}
