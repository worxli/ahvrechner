import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'ahv-mwst',
  templateUrl: './mwst.component.html',
  styleUrls: ['./mwst.component.scss']
})
export class MwstComponent implements OnInit {

  max = 8.0;
  min = 7.5;
  step = 0.1;
  value = 7.7;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.setValue();
  }

  setValue() {
    this.calculatorService.setMwSt(this.value);
  }

}
