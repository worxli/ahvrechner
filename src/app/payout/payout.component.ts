import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahv-payout',
  templateUrl: './payout.component.html',
  styleUrls: ['./payout.component.scss']
})
export class PayoutComponent implements OnInit {

  max = 2800;
  min = 2000;
  step = 10;
  value = 2250;

  constructor() { }

  ngOnInit() {
  }

}
