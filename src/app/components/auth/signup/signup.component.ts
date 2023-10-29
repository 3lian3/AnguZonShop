import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  constructor() {}

  ngOnInit(): void {}

  handelSubmit(): void {
    console.log('User:', this.user);
  }
}
