import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logindetails',
  templateUrl: './logindetails.component.html',
  styleUrls: ['./logindetails.component.css']
})
export class LogindetailsComponent implements OnInit {
  
  name!: string;
  password!: string;

  constructor(){}

  ngOnInit(): void {}

  onSubmit(){
    if(!this.name) {
      alert('Please Enter User Name and Password!');
      return;
    }
  }
  
}
