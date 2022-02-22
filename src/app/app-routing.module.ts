import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistationComponent } from './registation/registation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EventsComponent } from './events/events.component';
import { DemoComponent } from './demo/demo.component';
import { RegGuard } from './reg.guard';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'demo',
    canActivate:[RegGuard],
    component:DemoComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registration',
    component:RegistationComponent
  },
  {
    path:'events',
    component:EventsComponent
  },
  {
    path:'dashborad',
    canActivate:[AuthGuard],
    component:DashboardComponent
  },
  
  {
    path:'**',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentArray = [ 
  LoginComponent,
  RegistationComponent,
  DashboardComponent,
  EventsComponent,
  DemoComponent
]