import { Component, HostListener } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as bcrypt from 'bcryptjs';
import { LoginComponent } from '../login/login.component';
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
   private router : Router,
   private matdialog : MatDialog
   ){}
  ngOnInit(): void{
  }
 onSubmit(){
  const password = this.userForm.value.password;
  if(password){
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    this.userForm.patchValue({password: hash});
  }
   this.us.add(this.userForm.value).subscribe(res =>{
  })
  this.matdialog.closeAll()
  this.matdialog.open(LoginComponent, { autoFocus: false })
}
@HostListener('document:click', ['$event'])
handleClickEvent(event: MouseEvent) {
  const clickedElement = event.target as HTMLElement;
  if (!clickedElement.closest('.container')) {
    this.matdialog.closeAll()
  }
}
}
