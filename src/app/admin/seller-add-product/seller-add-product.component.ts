import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessenge: string | undefined;
  constructor(private product: ProductService) { }
  quantity = 0;
  ngOnInit(): void {

  }
  submit(data: Product) {
    data.size = [35, 36, 37, 38, 39, 40];
    data.quantity = this.quantity;
    this.product.addProduct(data).subscribe((result) => {
      console.warn(result)
      if (result) {
        this.addProductMessenge===alert("Product is successfully added");
      }
      setTimeout(() => this.addProductMessenge = undefined, 3000);
    })
  }
}
