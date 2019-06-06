import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AgeComponent } from './age/age.component';
import { FemaleComponent } from './age/female/female.component';
import { MaleComponent } from './age/male/male.component';
import { MwstComponent } from './mwst/mwst.component';
import { InputsComponent } from './inputs/inputs.component';
import { DeductionComponent } from './deduction/deduction.component';
import { PayoutComponent } from './payout/payout.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    AgeComponent,
    FemaleComponent,
    MaleComponent,
    MwstComponent,
    InputsComponent,
    DeductionComponent,
    PayoutComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
