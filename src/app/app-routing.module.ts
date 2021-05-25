import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'home', component:HomeComponent, pathMatch:"full"},
  {path:'users', component:UsersComponent, pathMatch:"full"}
];
//consider using on const routes the path of users **
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
