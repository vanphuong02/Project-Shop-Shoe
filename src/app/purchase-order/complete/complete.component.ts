import { Component } from '@angular/core';
import { Product } from 'src/app/product';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { ShipInformation } from 'src/app/shipInformation';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent {
  Notification = false
  infOrder: ShipInformation[] = []
 idUser !:number
  constructor(private purchase : PurchaseOrderService , private cookieService : CookieService){}
  ngOnInit(){
    const user = JSON.parse( this.cookieService.get('user'))
    this.purchase.getOrder(user.id).subscribe(res =>{
        this.infOrder = res
        console.log("allProductiduser:", this.infOrder);
     })
     if(this.infOrder.length == null){
      this.Notification = true
    }
  }
}
