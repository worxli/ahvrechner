import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

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

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.setValue()
  }

  setValue() {
    this.calculatorService.setPensionAge(this.value);
  }

}
