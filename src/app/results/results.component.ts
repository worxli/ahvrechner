import { Component, OnInit, ViewChild } from '@angular/core';
import { CalculatorService } from '../calculator.service';
import { BaseChartDirective, Label, Color } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'ahv-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  salary: number;

  lineChartData: ChartDataSets[] = [{ data: [100, 90, 50, 10, -40, -100, -400] }];
  lineChartLabels: Label[] = ['2020', '2025', '2030', '2035', '2040', '2045', '2050'];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.calculatorService.getResultSalary().subscribe(
      (salary: number) => this.salary = salary
    );
  }
}
