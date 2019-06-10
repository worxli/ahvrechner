import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

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

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.setValue()
  }

  setValue() {
    this.calculatorService.setPayout(this.value);
  }

}
