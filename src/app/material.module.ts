import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';

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
