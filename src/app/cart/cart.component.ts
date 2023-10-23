import { Component, OnInit } from "@angular/core";
import { Product } from "../product";
import { ColorService } from "../services/color.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  product: Product[] = [];
  total: number = 0;
  switchcart = "default";
  constructor(
    private card: ColorService,
    private route: Router,
    private cookieService: CookieService
  ) { }
  ngOnInit(): void {
    const idUser = JSON.parse(this.cookieService.get("user"));

    if (idUser) {
      this.card.getCartItems(idUser.id).subscribe((res) => {
        this.product = res;
        if (res.length > 0) {
          this.switchcart = "localCart";
        } else {
          this.switchcart = "default";
        }
        this.total = this.getTotal(this.product);
      });
    }
  }

  removeall() {
    const idUser = JSON.parse(this.cookieService.get("user"));
    if (idUser) {
      this.card.getCartItems(+idUser.id).subscribe((cartItems) => {
        cartItems.forEach((item: { id: number }) => {
          this.card.deleteCartItem(item.id).subscribe();
        });
        this.product = [];
        this.total = 0;
      });
    }
    // let cart = localStorage.removeItem("cartItems");
  }

  getTotal(items: Product[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  deleteOne(index: number) {
    this.card.deleteCartItem(this.product[index].id).subscribe((res) => {
      console.log(res);
      this.product.splice(index, 1);
      this.total = this.getTotal(this.product);
      if (res.length < 1) {
        this.switchcart = "default";
      }
    });
    // xoa local
    // const cart = JSON.parse(localStorage.getItem('cartItems') || '[]') as Product[];
    // if (cart) {
    //   cart.splice(index, 1);
    //   localStorage.setItem('cartItems', JSON.stringify(cart));
    //   this.product = cart;
    //   this.total = this.getTotal(this.product);
    // }
  }

  continuetopay() {
    const total = this.getTotal(this.product);
    this.route.navigate(["/order-status"]);
  }
}
