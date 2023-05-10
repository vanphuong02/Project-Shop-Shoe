import { Component, EventEmitter, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ColorService } from 'src/app/services/color.service';
import { UserService } from 'src/app/services/user.service';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems = 0;
  name: string = '';
  nameLogin: string = '';

  constructor(
    private product: ColorService,
    private cookieService: CookieService,
    private user: UserService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    const namecookie = this.cookieService.get('user');

    this.product.cartItems.subscribe((cartItems: Product[]) => {
      this.cartItems = cartItems.length;
    });

    if (namecookie) {
      this.user.getNameLogin().subscribe(name => {
        this.nameLogin = name;
      });
      const parseNameCookie = JSON.parse(namecookie);
      this.user.setNameLogin(parseNameCookie.username);
    }

    const user = this.cookieService.get('user');
    if (user) {
      const idUser = JSON.parse(user).id;
      this.product.getCartItems(idUser).subscribe((cartItems: Product[]) => {
        this.cartItems = cartItems.length;
      });

      this.product.cartItemAdded.subscribe(() => {
        this.cartItems = this.product.cartItems.value.length;
      });
    }
  }
  login() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

  logout() {
    this.cookieService.deleteAll('user');
    this.user.setNameLogin(this.name);
    this.router.navigate(['/home']);
    this.cartItems = 0;
  }
}