import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from '../services/purchase-order.service';
import { ShipInformation } from '../shipInformation';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
  constructor(private router: ActivatedRoute,
    private purchase: PurchaseOrderService,
    private cookieService: CookieService,
    private route: Router
  ) { }
  ngOnInit() {
    const idUser = JSON.parse(this.cookieService.get("user") || "");
    const status = this.router.snapshot.params['id'];
    console.log("status: ", status);

    this.purchase.getOrderStatus(idUser, status).subscribe(res => {
      let purchase = res
      purchase = purchase.filter((pr: ShipInformation) => {
        return (pr.status === status)
      })
    })
  }

}



