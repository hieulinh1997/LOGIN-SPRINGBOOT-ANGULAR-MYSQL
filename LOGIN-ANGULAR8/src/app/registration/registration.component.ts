import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRegistrationService } from '../user-registration.service';
import { Router } from '@angular/router';
import { sha256, sha224 } from 'js-sha256';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User=new User("","",sha256(""),"");
  message:any;
  invalidLogin = false

  constructor(private router: Router, private service:UserRegistrationService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.message=data);
    this.router.navigate(['search'])
      this.invalidLogin = false
      }

}
