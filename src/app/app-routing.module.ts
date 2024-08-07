import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskViewComponent } from './pages/task-view/task-view.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ListComponent } from './Mobile/list/list.component';
import { TaskComponent } from './Mobile/task/task.component';
import {LoginComponent1} from './Final/userAuth/login/login.component'
import { RegisterComponent1 } from './Final/userAuth/register/register.component';
import { ListComponent1 } from './Final/Todo/list/list.component';

const routes: Routes = [
  
  {
    path : 'login',component : LoginComponent
  },
  {
    path : 'register',component : RegisterComponent
  },
  {
    path : '',component : TaskViewComponent
  },
  {
    path : 'mobile',component : ListComponent
  },
  {
    path : 'mobile/task/:id',component : TaskComponent
  },
  {
    path : 'final/login', component : LoginComponent1
  },
  {
    path : 'final/register', component : RegisterComponent1
  },
  {
    path : 'final/abcd', component : ListComponent1
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
