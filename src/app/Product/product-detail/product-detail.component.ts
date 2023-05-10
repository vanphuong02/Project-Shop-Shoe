import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { Product } from 'src/app/product';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product | undefined;
  number = 1;
  selectedOption: any;
  idUser: any;
  submitAttempted = false;

  constructor(
    private detail: ColorService,
    private router: ActivatedRoute,
    private routerProduct: Router,
    private cookieService: CookieService
  ) { }

  ngOnInit(): void {
    const productId = this.router.snapshot.params['id'];
    this.detail.getId(productId).subscribe((res: Product) => {
      this.product = res;
    });
  }

  handleClickPlus() {
    if (this.number < 20) {
      this.number += 1;
    }
  }

  handleClickMinus() {
    if (this.number > 1) {
      this.number -= 1;
    }
  }

  addToCart() {
    const user = this.cookieService.get('user');
    if (user) {
      this.idUser = JSON.parse(user);
    }

    if (this.product) {
      this.submitAttempted = true;
      if (!this.selectedOption) {
        return;
      }
      this.product.quantity = this.number;
      this.detail
        .postToCart({ ...this.product, size: this.selectedOption, idUser: this.idUser.id })
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log(this.product);
    }
  }
  addToPay() {
    const user = this.cookieService.get('user');
    if (user) {
      this.idUser = JSON.parse(user);
    }

    if (this.product) {
      this.submitAttempted = true;
      if (!this.selectedOption) {
        return;
      }
      this.product.quantity = this.number;
      this.detail
        .postToCart({ ...this.product, size: this.selectedOption, idUser: this.idUser.id })
        .subscribe(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
      console.log(this.product);
    }
  }
}