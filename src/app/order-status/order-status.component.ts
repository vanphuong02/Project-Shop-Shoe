import { Component, OnInit } from "@angular/core";
import { City } from "src/app/city";
import { DeliveryAddressService } from "../services/delivery-address.service";
import { User } from "src/app/user";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ShippingInformationService } from "../services/shipping-information.service";
import { UserService } from "../services/user.service";
import { Distric } from "../distric";
import { Village } from "../village";
import { CookieService } from "ngx-cookie-service";
import { Product } from "../product";
import { format } from "date-fns";
import { ColorService } from "../services/color.service";
import { __values } from "tslib";
import ValidatorForm from "../validationForm";
@Component({
  selector: "app-order-status",
  templateUrl: "./order-status.component.html",
  styleUrls: ["./order-status.component.css"],
})
export class OrderStatusComponent implements OnInit {
  user!: User;
  DeliveryAddress: string = "";
  itemCart: Product[] = [];
  citys: City[] = [];
  districs: Distric[] = [];
  villages: Village[] = [];
  weight: number = 1;
  districCity: any;
  shipCharges: any;
  productCart: Product[] = [];
  total: number = 0;
  date: Date = new Date();
  currentDate: string = format(this.date, "dd/MM/yyyy");

  shipInformation = this.fb.group({
    idUser: new FormControl(),
    fullName: new FormControl("", Validators.required),
    sodt: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    city: new FormControl("", Validators.required),
    distric: new FormControl("", Validators.required),
    village: new FormControl("", Validators.required),
    ShoeName: new FormControl([""]),
    size: new FormControl(""),
    quantity: new FormControl(""),
    price: new FormControl(""),
    dateCreate: new FormControl(this.currentDate),
    status: new FormControl(0),
  });

  constructor(
    private address: DeliveryAddressService,
    private fb: FormBuilder,
    private router: Router,
    private order: ShippingInformationService,
    private routered: ActivatedRoute,
    private used: UserService,
    private cookieService: CookieService,
<<<<<<< HEAD
    private productOrder: ColorService,

=======
    private productOrder: ColorService
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
  ) {}
  ngOnInit() {
    this.getProductCart();
    // lấy danh sách tỉnh thành phố
    this.address.getCitys().subscribe((res) => {
      this.citys = res;
    });
  }
  handleChooseCity(e: Event) {
    this.address
      .getDistricts((e.target as HTMLInputElement).value)
      .subscribe((res) => {
        this.districs = res;
      });
  }
  handleChooseDistric(e: Event) {
    this.address
      .getVillages((e.target as HTMLInputElement).value)
      .subscribe((res) => {
        this.villages = res;
      });
  }
  submitOrder() {
    // lấy name thành phố , huyện
    const nameCity = this.citys.find(
<<<<<<< HEAD
      (city) => city.idProvince === this.shipInformation.value.city
=======
(city) => city.idProvince === this.shipInformation.value.city
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
    );
    const idUser = JSON.parse(this.cookieService.get("user") || "");
    this.districCity = this.districs.find(
      (distric) => distric.idDistrict === this.shipInformation.value.distric
    );
   // lay san pham trong cart
    this.productOrder.getCartItems(idUser.id).subscribe((res) => {
    this.itemCart = res;

      const shipInf = {
        idUser: idUser.id,
<<<<<<< HEAD
        fullName: this.shipInformation.value.fullName,
=======
        fullname: this.shipInformation.value.fullName,
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
        sodt: this.shipInformation.value.sodt,
        address: this.shipInformation.value.address,
        city: nameCity?.name,
        distric: this.districCity?.name,
        village: this.shipInformation.value.village,
        products: this.itemCart,
        dateCreate: this.shipInformation.value.dateCreate,
        status: this.shipInformation.value.status,
      };
      // add
      if (this.shipInformation.valid) {
        this.order.add(shipInf).subscribe((res) => {
         this.router.navigate(["/all-product-order"]);
        });
<<<<<<< HEAD
        this.removeall()
=======
        this.order.delete(idUser.id).subscribe((res) => {
          console.log("delete success");
       })
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
      }
      else {
        ValidatorForm.validateAllFormFileds(this.shipInformation);
      }
    });
  }

  // tổng tiền
  getTotal(items: Product[]): number {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  getProductCart() {
    const idUser = JSON.parse(this.cookieService.get("user"));
    this.productOrder.getCartItems(idUser.id).subscribe((res) => {
      this.productCart = res;
      //console.log("product:",this.productCart);
      //tính tổng
      this.total = this.productCart.reduce((total, product) => {
        return total + product.price * product.quantity;
      }, 0);
      // console.log("total:",this.total);
    });
<<<<<<< HEAD
  }

  // xóa sản phẩm trong cart
  removeall() {
    const idUser = JSON.parse(this.cookieService.get("user"));
    if (idUser) {
      this.productOrder.getCartItems(+idUser.id).subscribe(res => {
        res.forEach((item: { id: number }) => {
          this.productOrder.deleteCartItem(item.id).subscribe();
        });
      });
    }
=======
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
  }
  deleteProductOrder(id: number) {
    this.order.delete(id).subscribe((res) => {});
  }
}