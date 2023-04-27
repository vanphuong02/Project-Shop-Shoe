import { Component } from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { ShipInformation } from 'src/app/shipInformation';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-pending-approval',
  templateUrl: './pending-approval.component.html',
  styleUrls: ['./pending-approval.component.css']
})
export class PendingApprovalComponent {
  Notification = false
  infOrder: ShipInformation[] = []
  idUser !:number
  constructor(private purchase : PurchaseOrderService , private cookieService : CookieService){}
  ngOnInit(){
    const user = JSON.parse( this.cookieService.get('user'))
    this.purchase.getOrder(user.id).subscribe(res =>{
        this.infOrder = res
      //  console.log("allProductpending:", this.infOrder);
     })
     if(this.infOrder.length == null){
      this.Notification = true
    }
  }
}
