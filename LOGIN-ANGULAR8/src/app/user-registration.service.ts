import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }
  // public login(username: string, password: string) {
  //   const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  //   // console.log("login --------"+this.http.get("http://localhost/login/"+username+"&"+password))
  //   return this.http.post("http://localhost/login/api/v1/XXXXXXXXXX/" + username + "&" + password, { responseType: 'text' as 'json' });
  // }

  public login() {
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + (username + ':' + password) });
    // const headers = new HttpHeaders({ Authorization: 'Basic ' + (id+':'+username + ':' + name + ':' + password + ':' + role) });
    // console.log("login --------"+this.http.get("http://localhost/login/"+username+"&"+password))
    return this.http.post("http://localhost/login/api/v1/XXXXXXXXXX", { responseType: 'text' as 'json' });
  }

  public doRegistration(user) {
    return this.http.post("http://localhost/register/api/v1/XXXXXXXXXX", user, { responseType: 'text' as 'json' });
  }

  public getUsers() {
    let basicString = this.getHeaders();

    let headers = new HttpHeaders(
      { Authorization: basicString }
    );
    return this.http.get<User[]>("http://localhost/getAllUsers/api/v1/XXXXXXXXXX", { headers });
  }

  public getUserByEmail(email) {
    return this.http.get("http://localhost/findUser/api/v1/XXXXXXXXXX/" + email);
  }

  public deleteUser(id) {
    return this.http.delete("http://localhost/cancel/api/v1/XXXXXXXXXX/" + id);
  }

  getHeaders() {
    let username = sessionStorage.getItem('username')
    let password = 'password'

    let basicString = 'Basic ' + window.btoa(username + ':' + password)
    let basicStringAtob = 'Basic ' + (username + ':' + password)
    console.log("wtf" + basicString);
    console.log("atob " + basicStringAtob);
    return basicString;
  }
}
