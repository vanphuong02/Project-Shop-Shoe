import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { PurchaseOrderService } from "src/app/services/purchase-order.service";
import { ShipInformation } from "src/app/shipInformation";

@Component({
  selector: "app-purchase-status",
  templateUrl: "./purchase-status.component.html",
  styleUrls: ["./purchase-status.component.css"],
})
export class PurchaseStatusComponent {
  Notification = false;
  infOrder: ShipInformation[] = [];
  idUser!: number;
  constructor(
    private router: ActivatedRoute,
    private purchase: PurchaseOrderService,
    private cookieService: CookieService
  ) {}
  ngOnInit() {
    const user = JSON.parse(this.cookieService.get("user"));
    this.router.paramMap.subscribe((param) => {
      const status: number = parseInt(param.get("id")!);
      this.purchase.getOrder(user.id).subscribe((res) => {
        this.infOrder = res;
        this.infOrder = this.infOrder.filter((order) => {
          return order.status == status;
        });
      });
      if (this.infOrder.length == null) {
        this.Notification = true;
      }
    });
  }
}
