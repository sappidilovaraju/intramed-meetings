import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup: FormGroup;
  submitted: boolean = false;

  constructor() {
    this.loginFormGroup = new FormGroup({
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.submitted = true;
    if (this.loginFormGroup.valid) {
      
    }
  }
}
