import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { InterserviceService } from 'src/app/views/services/interservice.service';


@Component({
  selector: 'app-interventions',
  templateUrl: './interventions.component.html',
  styleUrls: ['./interventions.component.css']
})
export class InterventionsComponent implements OnInit {
  dataArray:any
  constructor(private inter:InterserviceService)
   { 
   // this.http.get('http://localhost:8080/api/intervention/getAll') .subscribe((data: any)=>console.log(data));
        
   }   

  ngOnInit(): void {
    this.inter.GetAllInterventions().subscribe((data: any)=>this.dataArray=data);
  }

}
