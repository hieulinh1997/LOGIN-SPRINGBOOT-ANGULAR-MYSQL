import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserRegistrationService } from '../user-registration.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User, LoginResponse } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  // invalidLogin = false
  message: any
  // err: any
  visability: any
  users: any
  user: FormGroup;
  id: any
  emai: any
  name: any
  password: any
  role: any

  constructor(private router: Router,
    private loginservice: AuthenticationService, private service: UserRegistrationService,
    private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.user = this.formBuilder.group({ id: '', email: '', name: '', password: '', role: '' });
    // console.log('ma hoa pass: ' + btoa(this.password))
    // console.log('decode pass: ' + window.atob(this.password))
  }

  doLogin() {

    // let btoaPassword = btoa(this.user.value.password)
    // console.log('pass atobPassword: ' + btoaPassword) 
    // this.user = this.formBuilder.group({ id: '', email: '', name: '', password: '', role: '' });
    let resp = this.http.post("http://localhost/login/api/v1/XXXXXXXXXX", this.user.value, this.httpOptions);
    resp.subscribe((data) => {
      if (data == true) {
        this.router.navigate(['search']);
        sessionStorage.setItem('username', this.user.value.email)
        localStorage.setItem('access_token', '');
        // this.invalidLogin = false
        this.message = data;
      } else {
        this.visability = true;
      }
    });
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }

  basePath = 'http://localhost/login/api/v1/XXXXXXXXXX';
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }



  // doLogin() {
  //   let logged = 0;
  //   let resp = this.service.login(this.username, this.password);
  //   resp.subscribe((data) => {
  //     if (data == true) {
  //       console.log("ok");
  //       sessionStorage.setItem('username', this.username)
  //       this.router.navigate(['search']);

  //       this.invalidLogin = false
  //       this.message = data;
  //     } else {

  //       this.visability = true;
  //     }
  //   });

  // }

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



}