import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  products: Product[] = [];
  colors: any = [];
  searchkey: string = ""
  gender: any
  constructor(private prd: ColorService) {
  }
  ngOnInit(): void {
    this.prd.getProduct().subscribe(res => {
      this.products = res
    })
  }
}

