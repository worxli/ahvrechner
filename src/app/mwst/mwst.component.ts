import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
