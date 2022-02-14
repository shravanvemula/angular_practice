import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';

import { Router } from '@angular/router';
import { IUser } from 'src/app/types/IUser';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  constructor(private userService: UserServiceService, private router: Router) {}

  public isInvalid = false
  public isEmailEmpty = false
   public isPasswordEmpty = false

  credentials = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  removeAlert() {
    this.isInvalid = false;
    this.isEmailEmpty = false;
    this.isPasswordEmpty = false;
  }

  authenticateUser() {
    const email = this.credentials.value.email;
    const password = this.credentials.value.password;

    if(email.length === 0) {
      this.isEmailEmpty = true;    
    }
    else if(password.length === 0) {
      this.isPasswordEmpty = true
    }
    else {
      this.userService.getUsers().subscribe((data) => {
        const users = data
          .filter(
            (user) => user.email === email && user.password === password
          )
          .map((user) => user.id);
        if (users.length > 0) {
          this.isInvalid = false;
          this.router.navigate(['home']);
          localStorage.setItem('userId', JSON.stringify(users[0]));
        } else {
          this.isInvalid = true;
        }
      });
    }
  }

  ngOnInit(): void {}
}
