import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';
import {CookieService} from 'ngx-cookie-service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  err = false
  @ViewChild('checkexit') modalContent!: ElementRef;
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
     private cookieService : CookieService,
     private matdialog: MatDialog
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
         this.cookieService.set('user',JSON.stringify({id: user.id, username: user.username}))
         this.userd.setNameLogin(user.username)
          this.matdialog.closeAll()
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
  register(){
     this.matdialog.closeAll()
     this.matdialog.open(RegisterComponent)
  }
  @HostListener('document:click', ['$event'])
  handleClickEvent(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;
    if (!clickedElement.closest('.container')) {
      this.matdialog.closeAll()
    }
  }
}


