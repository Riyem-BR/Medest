import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuarduserGuard implements CanActivate {
  constructor(private as:AuthServiceService,private route:Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   

      return new Promise((resolve,reject)=>{
        if (this.as.isLoggedIN()==true)
        {
          resolve(true)
        }
        else{
        this.route.navigate(['/loginuser'],{queryParams:{returnUrl:state.url}})
        resolve(false)
      }
      })
  }
  
}
