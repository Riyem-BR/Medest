import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterserviceService } from 'src/app/views/services/interservice.service';

@Component({
  selector: 'app-addinterventions',
  templateUrl: './addinterventions.component.html',
  styleUrls: ['./addinterventions.component.css']
})
export class AddinterventionsComponent implements OnInit {

  messageErr:any
  messageSuccess:any

  image:any
  name:any
  txt:any

  data={
    image:'',
    name:'',
    txt:''
  }
  constructor(private inter:InterserviceService,private router:Router) { 
    // this.inter.AddIntervention(this.data).subscribe(data => console.log(data))

  }

  ngOnInit(): void {
  }

  selectImage(event:any) {
    if (event.target.files.length > 0) {
      const path = event.target.files[0];
      //console.log(path)
      this.image = path;
      console.log(this.image)
    }
  }

  AddIntervention(f:any){

   

    //let data = f.value
    const formData = new FormData();
    formData.append('txt', f.value.txt)
    formData.append('name', f.value.name)
    formData.append('image', this.image)
    //console.log(data)


    this.inter.AddIntervention(formData).subscribe(data=>{
      this.messageSuccess=data
      // this.messageSuccess="Intervention added"
      this.router.navigate(['/admin/interventions'])
    },(err:HttpErrorResponse)=>{
     this.messageErr=err.error
      // console.log(err.error)
      this.router.navigate(['/admin/interventions'])
    })
  }
}
