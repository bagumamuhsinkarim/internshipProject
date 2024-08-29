import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loginbutton',
  templateUrl: './loginbutton.component.html',
  styleUrls: ['./loginbutton.component.css']
})
export class LoginbuttonComponent implements OnInit{
  @Input() text!: string;
  @Output() btnClick = new EventEmitter();

  constructor(){}

  ngOnInit(): void {}

  onClick(){
    this.btnClick.emit();
  }
}
