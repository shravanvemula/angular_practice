import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { EditBudgetComponent } from './components/edit-budget/edit-budget.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { ListBudgetComponent } from './components/list-budget/list-budget.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LoginUserComponent,
  },
  {
    path: 'register',
    component: RegisterUserComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'home/add',
    component: AddBudgetComponent,
  },
  {
    path: 'home/edit/:id',
    component: EditBudgetComponent,
  },
  {
    path: 'home/list',
    component: ListBudgetComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
