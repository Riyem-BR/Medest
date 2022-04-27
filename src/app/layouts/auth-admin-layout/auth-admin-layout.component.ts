import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthadminService } from 'src/app/views/services/authadmin.service';


@Component({
  selector: 'app-auth-admin-layout',
  templateUrl: './auth-admin-layout.component.html',
  styleUrls: ['./auth-admin-layout.component.css']
})
export class AuthAdminLayoutComponent implements OnInit {

  dataRecevie:any
  url:any
  messageErr:any
  constructor(private authadmin:AuthadminService,private router:Router,private ActRoute:ActivatedRoute) {
   
  
   }

  ngOnInit(): void {
 
  }


  loginadmin(f:any){

    let data=f.value

    // console.log(data)
    this.authadmin.login(data).subscribe((response) =>

      {
      this.dataRecevie=response

      
      this.authadmin.isSaveDataProfile(this.dataRecevie)
     
      this.router.navigate(['/admin/dashboard'])
      
      },    
      error=>{
        this.messageErr=error.error.message
      })
  }


}

