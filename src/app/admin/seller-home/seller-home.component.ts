import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {
  productList: undefined | Product[];
  productMessage: undefined | string

  constructor(private product: ProductService) { }
  ngOnInit(): void {
    this.list();
  }
  deleteProduct(id: number) {
    console.warn("test id", id);
    this.product.deleteProduct(id).subscribe((result) => {
      if (result) {
        this.productMessage = 'Product is deleted';
        const deletedIndex = this.productList?.findIndex(p => p.id === id);
        if (deletedIndex !== undefined && deletedIndex !== -1) {
          this.productList?.splice(deletedIndex, 1);
        }
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }
  list() {
    this.product.productList().subscribe((result) => {
      console.warn(result)
      this.productList = result;
    })
  }
}