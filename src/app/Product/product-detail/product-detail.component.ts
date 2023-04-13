import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/services/color.service';
import { query } from '@angular/animations';
import { Product } from 'src/app/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: undefined | Product;
  number = 1
  selectedSize = 35
  constructor(private api: ColorService, private detail: ColorService, private router: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.detail.getId(this.router.snapshot.params['id']).subscribe(res => {
      this.product = res
      console.log(this.product);

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
  AddToCard() {
    if (this.product) {
      this.product.quantity = this.number;
      if (!localStorage.getItem('user')) {
        console.log(this.product);
        this.detail.localAddTocard(this.product)
      }

    }
  }
}