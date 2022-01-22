import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard/wizard.component';



@NgModule({
  declarations: [
    WizardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WizardComponent
  ]
})
export class SharedModule { }
