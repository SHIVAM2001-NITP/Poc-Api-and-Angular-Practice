import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { HomeComponent } from './home/home.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { PostDataComponent } from './post-data/post-data.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent  
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path:'display',component:DisplayDataComponent},
      {path:'post',component:PostDataComponent}
    ]
  },
  {
    path: 'display',
    component: DisplayDataComponent
  },
  {
    path: 'post',
    component: PostDataComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
