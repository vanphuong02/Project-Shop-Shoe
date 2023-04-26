import { Component, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ColorService } from 'src/app/services/color.service';
import { UserService } from 'src/app/services/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartItems = 0
  name : string = ''
  constructor(private product: ColorService , private cookieService : CookieService, private user : UserService) {

  }
  ngOnInit() {
    let cartData = sessionStorage.getItem('localCart');
    if (cartData) {
      this.cartItems = JSON.parse(cartData).length;
    }
    this.product.cartData.subscribe((item) => {
      this.cartItems = item.length
    })
  }

}
