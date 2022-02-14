import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBudgetComponent } from './components/add-budget/add-budget.component';
import { EditBudgetComponent } from './components/edit-budget/edit-budget.component';
import { ListBudgetComponent } from './components/list-budget/list-budget.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    AddBudgetComponent,
    EditBudgetComponent,
    ListBudgetComponent,
    LoginUserComponent,
    RegisterUserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
