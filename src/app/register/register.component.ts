import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userForm = this.fb.group({
     fullName:['',Validators.required],
     email:['',Validators.required],
     sodt:['',Validators.required],
     username:['',Validators.required],
     password: ['',Validators.required],
     jurisdiction:[0]
  })

  constructor(
   private us : UserService,
   private fb : FormBuilder,
   private router : Router
   ){}
  ngOnInit(): void{
  }
 onSubmit(){
   this.us.add(this.userForm.value).subscribe(res =>{
  })
}
}
