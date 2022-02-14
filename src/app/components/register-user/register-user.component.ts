import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserServiceService } from 'src/app/user-service.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/types/IUser';


@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['../login-user/login-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  constructor(
    private userService: UserServiceService,
    private router: Router
  ) {}

  public isAdded = false;
  public isEmailEmpty = false;
  public isPasswordEmpty = false;
  public isAgeEmpty = false

  ngOnInit(): void {}

  addUser = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(),
  });

  saveUser() {

    if(this.addUser.value.email.length === 0) {
      this.isEmailEmpty = true;
    }

    else if (this.addUser.value.password.length === 0) {
      this.isPasswordEmpty = true;
    }

    else if (this.addUser.value.age === null) {
      this.isAgeEmpty = true;
    }
    else {
      this.userService.saveUser(this.addUser.value).subscribe((user) => {
        localStorage.setItem('userId', JSON.stringify(user.id));
        this.isAdded = true;
        this.addUser.reset({});
        this.router.navigate(['home']);
      });
    }

  }

  removeAlert() {
    this.isAdded = false;
    this.isAgeEmpty = false;
    this.isEmailEmpty = false;
    this.isPasswordEmpty = false;
  }
}
