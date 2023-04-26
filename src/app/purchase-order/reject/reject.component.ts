import { Component } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { ShipInformation } from 'src/app/shipInformation';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-reject',
  templateUrl: './reject.component.html',
  styleUrls: ['./reject.component.css']
})
export class RejectComponent {
  Notification = false
  infOrder: ShipInformation[] = []
  idUser!:number
  constructor(private purchase : PurchaseOrderService , private cookieService : CookieService){}
  ngOnInit(){

    this.idUser = + this.cookieService.get('user')
    this.purchase.getOrderReject(this.idUser).subscribe(res =>{
        this.infOrder = res
        console.log("Reject:",this.infOrder);
        if(this.infOrder.length == null){
          this.Notification = true
        }
     })
  }
}
