import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  steps: string[] = ['select', 'submit info', 'complete'];
  activeStep: string = 'select';
  registerFormGroup: FormGroup;
  submitted: boolean = false;

  constructor(private registerService: RegisterService) { 
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      state: new FormControl('', [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      confirmemail: new FormControl(null, [Validators.required, Validators.email], [this.validateConfirmPassword.bind(this)]),
      subscribe: new FormControl(null),
    });
  }

  ngOnInit(): void {
  }

  register() {
    this.submitted = true;
    this.activeStep = 'submit info';
    if (this.registerFormGroup.valid) {
      this.registerService.register(this.registerFormGroup.value).subscribe((response: any) => {
        if (response) {
          this.activeStep = 'complete';
        } else {
          alert('Registration failed');
        }
      }, error => {
        alert('Registration failed');
        console.log(error);
      })
    }
  }

  validateConfirmPassword(control: AbstractControl): Observable<ValidationErrors | null> {
    const email = this.registerFormGroup.get('email')?.value;
    if (control.value && email) {
      if (control.value !== email) {
        return of({
          notmatched: true
        });
      } else {
        return of(null);  
      }
    } else {
      return of(null);
    }
  }
}
