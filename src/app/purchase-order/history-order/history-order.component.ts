import { Component,OnInit} from '@angular/core';
import { PurchaseOrderService } from 'src/app/services/purchase-order.service';
import { ShipInformation } from 'src/app/shipInformation';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-history-order',
  templateUrl: './history-order.component.html',
  styleUrls: ['./history-order.component.css']
})
export class HistoryOrderComponent implements OnInit{
  idUser!:number
  infOrder:ShipInformation[]=[];
  constructor(private purchase : PurchaseOrderService , private cookieService : CookieService){}
  ngOnInit(){
   // console.log("idUser:",this.cookieService.get('user'));
   const user = JSON.parse( this.cookieService.get('user'))
    this.purchase.getHistory(user.id).subscribe(res =>{
      this.infOrder = res
        // if(this.infOrder.status == 2 || this.infOrder.status == -1)
        //   {
        //     this.infOrder = res
        //     console.log("inf status:",this.infOrder);
        //   }
        //console.log("inf status:",this.infOrder[0].status);
     })
  }
}
