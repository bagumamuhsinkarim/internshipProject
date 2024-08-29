import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { mto } from 'src/app/model/mtos';

@Component({
  selector: 'app-geneartions',
  templateUrl: './geneartions.component.html',
  styleUrls: ['./geneartions.component.css']
})

export class GeneartionsComponent implements OnInit{
last10Mtos: mto[] = [];

  patName!: string;
  hosptName!: string;
  dates!: string;
  staffName!: string;

  constructor(private http:HttpClient){}

  ngOnInit(): void {
   // this.fetchmto();
  }

  onFetch(){
    this.fetchmto();
  }

  private fetchmto(){
    this.http.get<{[key: string]: mto}>('http://localhost:3000/mtos')
    .pipe(map((res) => {
      const mto =[];
      for (const key in res){
        if(res.hasOwnProperty(key)){
        mto.push({...res[key], id:key})
        }      
      }
      return mto;
    }))
    .subscribe((mto)=>{
      console.log(mto);
      this.last10Mtos = mto;
    })
  }

  onGen(){
    if (!this.patName){
      alert('Please and Patient Name');
      return;
    }   
    if(!this.hosptName){
      alert('Please and hospital');
      return;
    }
    if(!this.dates){
      alert('Please indicate dates!');
      return;
    }
    if(!this.staffName){
      alert('Please indicate staff Name!');
      return;
    }

     // Construct the data object for the POST request
    const data = {
      patName: this.patName,     
      hosptName: this.hosptName,
      dates: this.dates,
      staffName: this.staffName
    };

    this.http.post<{name: string}>('http://localhost:3000/mtos', data).subscribe((res)=>{
    console.log(res);
    });
    
  }
}


