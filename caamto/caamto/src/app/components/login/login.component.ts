import { Component, OnInit,  } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title: string = 'CAA MTO SYSTEM';

  constructor(private router:Router){

  }

  ngOnInit(): void {}
  
  homepage(){
    console.log('Add');
  }

  hasRoute(route: string){
    return this.router.url == route;
  }
}
