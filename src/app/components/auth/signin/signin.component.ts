import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  user: User = {
    email: '',
    password: '',
  };

  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private formBulder: FormBuilder) {
    this.email = formBulder.control('', [
      Validators.email,
      Validators.required,
    ]);
    this.password = formBulder.control('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.signinForm = formBulder.group({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  handelSubmit(): void {
    console.log(this.signinForm);
  }
}
