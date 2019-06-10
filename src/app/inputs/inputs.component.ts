import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'ahv-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  age = 40;
  salary = 5000;
  gender = 'male';

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.setSalary();
    this.setGender();
    this.setAge();
  }

  setSalary() {
    this.calculatorService.setSalary(this.salary);
  }

  setGender() {
    this.calculatorService.setGender(this.gender);
  }

  setAge() {
    this.calculatorService.setAge(this.age);
  }

}
