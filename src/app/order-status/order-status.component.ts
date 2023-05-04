import { Component, OnInit} from '@angular/core';
import { City } from 'src/app/city';
import { DeliveryAddressService } from '../services/delivery-address.service';
import { User } from 'src/app/user';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingInformationService } from '../services/shipping-information.service';
import { UserService } from '../services/user.service';
import { Distric } from '../distric';
import { Village } from '../village';
import { CookieService } from 'ngx-cookie-service';
import { Product } from '../product';
import {format} from 'date-fns';
@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrls: ['./order-status.component.css']
})
export class OrderStatusComponent implements OnInit {
  user!: User
  DeliveryAddress: string = ''
  citys  : City[]=[]
  districs : Distric[]=[]
  villages : Village[] = []
  weight: number = 1
  districCity :any
  shipCharges:any
  productCart  :Product [] = []
  total : number = 0
  date: Date = new Date();
  currentDate :string = format(this.date, 'dd/MM/yyyy')

  shipInformation = this.fb.group({
    idUser : new FormControl(),
    fullName:new FormControl(''),
    sodt:new FormControl(''),
    address:new FormControl(''),
    city:new FormControl(''),
    distric:new FormControl(''),
    village:new FormControl(''),
    ShoeName:new FormControl(['']),
    size:new FormControl(''),
    quantity:new FormControl(''),
    price:new FormControl(''),
    dateCreate : new FormControl(this.currentDate),
    status:new FormControl(0),
  })

  constructor(
    private address : DeliveryAddressService,
    private fb : FormBuilder,
    private router : Router,
    private order : ShippingInformationService,
    private routered : ActivatedRoute,
    private used : UserService,
    private cookieService : CookieService,
    ){}
  ngOnInit(){

    // const itemCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    // console.log("itemCart: " , itemCart);

    this.getProductCart()
    // lấy danh sách tỉnh thành phố
     this.address.getCitys().subscribe(res =>{
      this.citys = res
     })

}
  handleChooseCity(e : Event) {
    this.address.getDistricts((e.target as HTMLInputElement).value).subscribe(res =>{
      this.districs = res
    })
  }
  handleChooseDistric(e :Event){
     this.address.getVillages((e.target as HTMLInputElement).value).subscribe(res =>{
        this.villages = res
     })
  }
  submitOrder(){
    // lấy name thành phố , huyện
    const nameCity = this.citys.find(city => city.idProvince === this.shipInformation.value.city)
    const itemCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const idUser = JSON.parse(this.cookieService.get('user') || '');

    this.districCity = this.districs.find(distric => distric.idDistrict === this.shipInformation.value.distric)
        const shipInf = {
        idUser : idUser.id,
        fullname: this.shipInformation.value.fullName,
        sodt: this.shipInformation.value.sodt,
        address: this.shipInformation.value.address,
        city: nameCity?.name,
        distric: this.districCity?.name,
        village: this.shipInformation.value.village,
        products:itemCart,
        dateCreate:this.shipInformation.value.dateCreate,
        status:this.shipInformation.value.status,
    }
     this.order.add(shipInf).subscribe(res =>{
       //  console.log("add susscess");
     this.router.navigate(['/all-product-order'])
     })
  }
  // tổng tiền
  getTotal(items: Product[]): number {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  // lấy sản phẩm trong session
  getProductCart(){
    const itemCart = localStorage.getItem('cartItems');
     if(itemCart != null){
      this.productCart = JSON.parse(itemCart) as Product[];
      this.total = this.getTotal(this.productCart);
     }
  }
}
