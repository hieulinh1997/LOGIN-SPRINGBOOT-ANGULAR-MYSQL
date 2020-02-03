import { Component, Injectable } from '@angular/core';
import { UserRegistrationService } from '../user-registration.service';

@Injectable({
  providedIn: 'root'
})
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
export class AuthenticationService {


  constructor(private service: UserRegistrationService) { }


  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    // alert('logout');
  }

  // authenticate(username, password) {

  //   let userData;
  //   let nameData;
  //   let ok = 1;
  //   let resp = this.service.getUserByEmail(username);
  //   let i = 2;
  //   resp.subscribe((data) => {
  //     for (const d of (data as any)) {
  //       userData = d.email;
  //       nameData = d.name;
  //       console.log(userData);
  //       console.log(nameData);
  //     }
  //   });

  //   return setTimeout(function(){
  //     if (username != userData && password != nameData) {
  //       console.log("sai tai khoan");
  //       return false;
  //     } else if(username === userData && password === nameData){
  //       sessionStorage.setItem('username', username)
  //       return true;
  //     }
  //   },500)

  // }

}