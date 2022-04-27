import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/views/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  dataRecevie:any
  url:any
  messageErr:any
  constructor(private auth:AuthServiceService,private router:Router,private ActRoute:ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  

  register(f:any){
    
    let data=f.value

   // console.log(data)

   
    this.auth.register(data).subscribe(response=>
      {
      this.dataRecevie=response
      this.auth.isSaveDataProfile(this.dataRecevie)
      this.router.navigate(['/loginuser'])
      
      },    
      error=>{
        this.messageErr=error.error.message
  })
  }
}
