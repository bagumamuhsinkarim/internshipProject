import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginbuttonComponent } from './components/loginbutton/loginbutton.component';
import { LogindetailsComponent } from './components/logindetails/logindetails.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { GeneartionsComponent } from './components/geneartions/geneartions.component';
import { BillsformComponent } from './components/billsform/billsform.component';
import { FooterComponent } from './components/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  //{path: '', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'generate', component:GeneartionsComponent},
  {path: 'bills', component:BillsformComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginbuttonComponent,
    LogindetailsComponent,
    HomepageComponent,
    GeneartionsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
