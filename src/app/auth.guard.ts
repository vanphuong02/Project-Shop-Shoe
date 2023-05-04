import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( private cookieService : CookieService, private router : Router,    private matdialog: MatDialog){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
        // check admin
  if (this.cookieService.check('admin')) {
    return true;
  }
  else if(this.cookieService.check('user')){
    return true
  }
   else {
    this.matdialog.open(LoginComponent);
    return false;
  }
}
}
