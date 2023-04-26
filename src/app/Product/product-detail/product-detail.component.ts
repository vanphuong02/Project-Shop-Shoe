import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { query } from '@angular/animations';
import { Product } from 'src/app/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: undefined | Product;
  number = 1
  selectedOption: any;
  constructor(
     private detail: ColorService,
     private router: ActivatedRoute,
     private routerProdcut: Router,
     private cookkieServer : CookieService) { }

  ngOnInit(): void {
     this.detail.getId(this.router.snapshot.params['id']).subscribe(res => {
      console.log("res:",res);

      this.product = res
    })

  }
  handerclickplus() {
    if (this.number < 20) {
      this.number = this.number + 1
    }
  }
  handerclickminus() {
    if (this.number > 1) {
      this.number = this.number - 1
    }
  }
  AddToCart() {
    if (this.product) {
      this.product.quantity = this.number;
      if (this.cookkieServer.get('user')) {
        this.detail.localAddToCart({ ...this.product, size: this.selectedOption });
      }
      console.log(this.product);
    }

  }
  AddToPay() {
    if (this.product) {
      this.product.quantity = this.number;
      // this.product.size = this.selectedOption
      if (this.cookkieServer.get('user')) {
        this.detail.localAddToCart({ ...this.product, size: this.selectedOption });
      }


      console.log(this.product);
      // if (sessionStorage.getItem('user')) {
      //   this.detail.localAddToCart(this.product)
      // }
    }
    this.routerProdcut.navigate(['/cart'])
  }
  //   let cartData = sessionStorage.getItem('localCart')
  //   if (productid && cartData) {
  //     let items = JSON.parse(cartData);
  //     items = items.filter((item: any) => productid === item.id.toString())
  //     if (items.length) {
  //       this.removeCart = true
  //     } else {
  //       this.removeCart = false
  //     }
  //   }
  // }
}
