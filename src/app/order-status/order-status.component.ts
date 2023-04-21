import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent {
  product: Product[] = []
  ngOnInit(): void {
    const productStatus = JSON.parse(sessionStorage.getItem('localCart') || '{}');
    const { id, ShoeName, code, color, gender, img, price, quantity, size } = productStatus


    // productStatus.forEach((element: Product) => {
    //   this.product.push(element);
    //   console.log(this.product);
    // })
  }
}
