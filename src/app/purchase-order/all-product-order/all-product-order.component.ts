import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { ShipInformation } from 'src/app/shipInformation';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-all-product-order',
  templateUrl: './all-product-order.component.html',
  styleUrls: ['./all-product-order.component.css']
})
export class AllProductOrderComponent {
  Notification = false;
  infOrder: ShipInformation[] = []
  idOrder!: ShipInformation
  idUser!:number
  constructor(private purchase : PurchaseOrderService ,
              private router: Router ,
              private cookieService : CookieService
             ){}
  ngOnInit(){
   // console.log("idUser:",this.cookieService.get('user'));

     this.idUser = + this.cookieService.get('user')
    this.purchase.getOrder(this.idUser).subscribe(res =>{
        this.infOrder = res
       // console.log("allProductiduser:", this.infOrder);
     })
     if(this.infOrder.length == null){
      this.Notification = true
    }

  }
  getStatus(id: number){
      this.purchase.getIdOrder(this.idUser,id).subscribe(res =>{
         this.idOrder = res
         console.log("order:",this.idOrder.status);

         switch(this.idOrder.status){
          case 0:
            this.router.navigate(['/pending-approval']);
            break;
          case 1:
            this.router.navigate(['/pending-approval']);
            break;
          case 2:
            this.router.navigate(['/complete']);
            break;
          case -1:
            this.router.navigate(['/reject']);
            break;
        }
      })
  }
}
