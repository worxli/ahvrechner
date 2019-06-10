import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'ahv-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  salary: number;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculatorService.getResultSalary().subscribe(
      (salary: number) => this.salary = salary
    );
  }

}
