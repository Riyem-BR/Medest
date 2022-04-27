import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { AuthServiceService } from 'src/app/views/services/auth-service.service';
import { AuthadminService } from 'src/app/views/services/authadmin.service';
@Component({
  selector: 'app-front-layout',
  templateUrl: './front-layout.component.html',
  styleUrls: ['./front-layout.component.css']
})
export class FrontLayoutComponent implements OnInit {


  messageErr=""
  messagesucces=""
  constructor() {
  //   if (this.ds.isLoggedIN()==true){
  //     this.router.navigate(['/moncompte'])
  //  }
   }

  ngOnInit(): void {
  }

  inscription(f:any){
    let data=f.value
   // console.log(data)
    // this.ds. login(data).subscribe(data=>{
    //  this.messagesucces="Votre Compte ajouter avec successfully"
    // },(err:HttpErrorResponse)=>{
    //  this.messageErr=err.error
    //   console.log(err.error)
    // })
  }

  logout(){
    // localStorage.removeItem('token')
    // this.router.navigate(['/loginuser'])
  }

}
