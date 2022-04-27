import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/views/services/auth-service.service';

@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.css']
})
export class LoginuserComponent implements OnInit {

  dataRecevie:any
  url:any
  messageErr:any
  constructor(private as:AuthServiceService,private router:Router){
 

    //   if (this.ds.isLoggedIN()==true){
    //     this.router.navigate(['/moncompte'])
    //  }
    }

  ngOnInit(): void {
  // this.url=this.ActRoute.snapshot.queryParams['returnUrl'] ||'/moncompte/'
  // console.log(this.url)

  }


  loginuser(f:any){
    let data=f.value
    this.as.login(data).subscribe(response=>
      {
      this.dataRecevie=response
      this.as.isSaveDataProfile(this.dataRecevie)
      // this.router.navigate([this.url])
      this.router.navigate(['/home'])
      
      },    
      error=>{
        this.messageErr='Bad credentials'
      })
  }
}
