import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  
  Profile={
    username:'',
    role:''
  }


  IsLoggedIN:Boolean = false;



  helper = new JwtHelperService();
 constructor(private http:HttpClient) { }



register(data:any){

 return this.http.post('http://localhost:8080/api/auth/signup',data)
}

login(data:any){

  return this.http.post('http://localhost:8080/api/auth/signin',data)
 }

 isSaveDataProfile(token:any)
 {
   localStorage.setItem('token',token.accessToken)
   localStorage.setItem('tokenid',token.id)
   localStorage.setItem('usernametoken',token.username)
   localStorage.setItem('roletoken',token.roles)

 }
 getUserName(){
   let usernametoken:any=localStorage.getItem('usernametoken')

   return usernametoken
 }

 getUserid(){
   let idtoken:any=localStorage.getItem('tokenid')

   return idtoken
 }

 isLoggedIN(){
   let token:any=localStorage.getItem('token')

   let roletoken:any=localStorage.getItem('roletoken')

   if (!localStorage.getItem('token'))
   {
     return false
   }

   if (roletoken!=='ROLE_USER'){
     return false
   }
   if (this.helper.isTokenExpired(token)){
     return false
   }
   return true
 }
 

}