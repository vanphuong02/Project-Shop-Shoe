import { Component, OnInit, Input } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  colors: any = [];
  searchkey: string = ""
  gender: any
  p: number = 1
  public productlist: any;
  constructor(private prd: ColorService) { }
  ngOnInit(): void {
    this.prd.getProduct().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
    this.prd.search.subscribe((val: string) => {
      this.searchkey = val;
    });
  }
}