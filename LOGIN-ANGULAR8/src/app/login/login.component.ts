import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserRegistrationService } from '../user-registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = true
  message: any

  users: any

  constructor(private router: Router,
    private loginservice: AuthenticationService, private service: UserRegistrationService) { }

  ngOnInit() {
  }

  // checkLogin() {
  //   if (
  //     this.loginservice.authenticate(this.username, this.password)
  //   ) {
  //     this.router.navigate(['search'])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  doLogin() {
    let logged = 0;
    let resp = this.service.login(this.username, this.password);
    resp.subscribe((data) => {
      if (data == true) {
        alert("Dang nhap thanh cong voi: " + this.username);
        sessionStorage.setItem('username', this.username)
        this.router.navigate(['search']);
        this.invalidLogin = false
        this.message = data;
      } else {
        alert("Dang nhap khong thanh cong")
      }

      // logged = 1;
      // sessionStorage.setItem('username', this.username)

      // this.router.navigate(['search']);
      // this.invalidLogin = false
      // this.message = data;
    });

    // if (
    //   this.loginservice.authenticate(this.username, this.password)
    // ) {
    //   this.router.navigate(['search'])
    //   this.invalidLogin = false
    // } else {
    //   this.invalidLogin = true
    // }


  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    // console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

}