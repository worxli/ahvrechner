import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatSliderModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatCardModule,
  MatRadioModule
} from '@angular/material';

import { PlatformModule } from '@angular/cdk/platform';
import { ObserversModule } from '@angular/cdk/observers';

@NgModule({
  exports: [
    MatInputModule,
    MatSliderModule,
    MatCardModule,
    MatRadioModule,
    MatFormFieldModule,
    MatCheckboxModule,
    ObserversModule,
    PlatformModule
  ]
})
export class MaterialModule { }
