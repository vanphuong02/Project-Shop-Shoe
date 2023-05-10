import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/product';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: undefined | Product[];
  colors: any = [];

  public productlist: any;
  constructor(private prd: ColorService) { }
  ngOnInit(): void {
    this.prd.getProduct().subscribe(res => {
      this.products = res;
      console.log(this.products);
    })
  }
}