import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { billLook } from 'src/app/model/bills';

@Component({
  selector: 'app-billsform',
  templateUrl: './billsform.component.html',
  styleUrls: ['./billsform.component.css']
})
export class BillsformComponent implements OnInit {
  BILLS: billLook[] = [];

  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.fetch();
  }

  onFetchbILL(){
    this.fetch();
  }

  private fetch(){
    this.http.get<{[key: string]: billLook}>('http://localhost:3300/bills')
    .pipe(map((res) => {
      const b =[];
      for (const key in res){
        if(res.hasOwnProperty(key)){
          b.push({...res[key], id:key})
        }      
      }
      return b;
    }))
    .subscribe((b)=>{
      console.log(b);
      this.BILLS = b;
    })
  }

}
