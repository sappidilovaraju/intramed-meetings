import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.scss']
})
export class WizardComponent implements OnInit {

  @Input() steps: string[] = [];
  @Input() activeStep: string | undefined;

  get width(): number {
    if (this.activeStep) {
      return (this.steps.indexOf(this.activeStep) / (this.steps.length - 1)) * 100;
    } else {
      return 0;
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

  isStepActive(index: number) {
    if (this.activeStep) {
      return index <= this.steps.indexOf(this.activeStep);
    } else {
      return false;
    }
  }

}
