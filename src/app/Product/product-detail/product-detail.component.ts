import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { query } from '@angular/animations';
import { Product } from 'src/app/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  idUser !: any;
  submitAttempted: boolean = false;
  private productc: Product[] = [];

  constructor(private detail: ColorService,
     private router: ActivatedRoute,
     private http: HttpClient,
     private routerProdcut: Router,
     private cookieService: CookieService,
     ) {
  }


  ngOnInit(): void {
    let productid = this.detail.getId(this.router.snapshot.params['id']).subscribe(res => {
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
    const user = this.cookieService.get('user')
    if (user) {
       this.idUser = JSON.parse(user)
    }
    if (this.product) {
      this.submitAttempted = true;
      if (!this.selectedOption) {
        return;
      }
      this.product.quantity = this.number;
      this.detail.postToCart({ ...this.product, size: this.selectedOption,idUser:this.idUser.id})
        .subscribe(response => {
          console.log(response);


        }, error => {
          console.log(error);
        });
      console.log(this.product);
    }
  }
  AddToPay() {
    if (this.product) {
      this.submitAttempted = true;
      if (!this.selectedOption) {
        return;
      }
      this.product.quantity = this.number;
      this.detail.postToPay({ ...this.product, size: this.selectedOption })
        .subscribe(response => {
          console.log(response);
          this.routerProdcut.navigate(['/cart']);
        }, error => {
          console.log(error);
        });
    }
  }
}
