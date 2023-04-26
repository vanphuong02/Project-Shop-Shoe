import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';
import {CookieService} from 'ngx-cookie-service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  err = false
  loginForm = this.fb.group({
     username :[''],
     password :[''],
    //  jurisdiction:['']
  })
  constructor
   (
     private route :Router,
     private fb : FormBuilder,
     private userd : UserService,
     private http: HttpClient,
     private cookieService : CookieService
    )
  { }

 onSubmit():void{
  this.userd.getList().subscribe(
    res=> {
      const user=res.find( (us:any) =>{
        return us.username === this.loginForm.value.username && us.password === this.loginForm.value.password
              && us.jurisdiction === 0;
      })
      const admin = res.find((us:any)=>{
        return us.username === this.loginForm.value.username && us.password === this.loginForm.value.password
        && us.jurisdiction === 1;
      })
      if(user)
       {
         this.cookieService.set('user',user.id)
          console.log( this.cookieService.set('user',user.id));
          this.route.navigate(['/home'])
       }
       else if(admin){
        this.cookieService.set('admin',"admin")
        this.route.navigate(['/homeadmin'])
       }
      else
        { this.route.navigate(['/login'],)
          this.err = true
        }
    }
  );
}
}


