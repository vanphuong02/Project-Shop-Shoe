import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { style } from '@angular/animations';

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
  })
  constructor
   (
     private route :Router,
     private fb : FormBuilder,
     private userd : UserService,
     private http: HttpClient
    )
  { }

 onSubmit():void{
  this.userd.getList().subscribe(
    res=> {
      console.log('res', res);

      const data=res.find( (us:any) =>{
        return us.username === this.loginForm.value.username && us.password === this.loginForm.value.password
        ;
      })
      console.log(data);

      if(data)
       {
         sessionStorage.setItem('user',JSON.stringify(data)) // lưu trữ giá trị tạm thời trên trình duyệt
          this.route.navigate(['/home'])
       }
      else
        { this.route.navigate(['/login'],)
          this.err = true
        }
    }
  );
}
}