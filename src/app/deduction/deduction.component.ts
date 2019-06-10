import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

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

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.setValue()
  }

  setValue() {
    this.calculatorService.setDeduction(this.value);
  }

}
