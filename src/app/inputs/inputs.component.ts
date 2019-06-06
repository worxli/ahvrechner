import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ahv-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnInit {

  age = 40;
  salary = 5000;
  gender = 'male';

  constructor() { }

  ngOnInit() {
  }

}
