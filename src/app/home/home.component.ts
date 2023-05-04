import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';
import { ColorService } from '../services/color.service';
import { Product } from '../product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dialogRef!: MatDialogRef<LoginComponent>;
  products : Product[]=[];
  constructor(private dialog: MatDialog , private cookieServer :CookieService, private list : ColorService) { }

  ngOnInit(): void {
      this.list.getProduct().subscribe(res =>{
         this.products  = res
      })
  }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginComponent);
  }

}
