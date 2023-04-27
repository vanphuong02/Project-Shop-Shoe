import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dialogRef!: MatDialogRef<LoginComponent>;

  constructor(private dialog: MatDialog , private cookieServer :CookieService) { }

  ngOnInit(): void {
   

  }

  openLoginDialog() {
    this.dialogRef = this.dialog.open(LoginComponent);

  }

}
