import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { forbiddenNameValidator } from './../validate-username.directive';
import { Router, RouterModule } from '@angular/router';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  exportAs: 'login'
})
export class LoginComponent implements OnInit {
  private loginForm;
  private validateUserNameFlag = false;
  constructor(private router: Router) { }

  private auth = {
    userName: '',
    password: ''
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'userName': new FormControl(this.auth.userName, [
        Validators.required,
        Validators.minLength(5),
      ]),
      'password': new FormControl(this.auth.password,
        Validators.required,
        Validators.minLength(6),
      )
    });
  }

  onSubmit(): void {
    this.router.navigate(['/dashboard']);
  }

  validateUserName(): void {
    const regEx = /[`~,.<>;!@#$%^&*?':"/[\]|{}()=_+]/;
    this.validateUserNameFlag = regEx.test(this.auth.userName);
  }

  onDestroy() {
    this.auth.userName = '';
    this.auth.password = '';
  }
}

