
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SerachDeleteComponent } from './serach-delete/serach-delete.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';

const routes: Routes = [
  {path:"",redirectTo:"register",pathMatch:"full"},
  // { path: '', component: EmployeeComponent,canActivate:[AuthGaurdService] },
   {path:"register",component:RegistrationComponent},
   { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService] },
   {path:"search",component:SerachDeleteComponent,canActivate:[AuthGaurdService]} //login moi show
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }