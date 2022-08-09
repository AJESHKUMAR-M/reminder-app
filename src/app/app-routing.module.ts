import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VieweventComponent } from './viewevent/viewevent.component';

const routes: Routes = [
  {
    path: '',component: LoginComponent
  },
  {
    path: 'register',component: RegisterComponent
  },
  {
    path: 'home',component:HomeComponent 
  },
  {
    path: 'viewevent',component:VieweventComponent
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
