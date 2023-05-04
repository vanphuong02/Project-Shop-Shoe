import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { ProductFilterComponent } from './Product/product-filter/product-filter.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { ErrorComponent } from './error/error.component';
import { AuthGuard } from './auth.guard';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CartComponent } from './cart/cart.component';
import { publishFacade } from '@angular/compiler';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AllProductOrderComponent } from './purchase-order/all-product-order/all-product-order.component';
import { CompleteComponent } from './purchase-order/complete/complete.component';
import { PendingApprovalComponent } from './purchase-order/pending-approval/pending-approval.component';
import { RejectComponent } from './purchase-order/reject/reject.component';
import { HistoryOrderComponent } from './purchase-order/history-order/history-order.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'Product',children :[
    { path:'product-list',component:ProductListComponent},
    { path:'product-detail/:id',component:ProductDetailComponent},
    { path:'product-filter',component:ProductFilterComponent}
  ]},
  {path:'order-status',canActivate:[AuthGuard],component:OrderStatusComponent},
  {path:'homeadmin',canActivate:[AuthGuard],component:AdminHomeComponent},
  {path:'cart',component:CartComponent},
  {path:'purchase-order',component:PurchaseOrderComponent},
  {path:'all-product-order',component:AllProductOrderComponent},
  {path:'complete',component:CompleteComponent},
  {path:'pending-approval',component:PendingApprovalComponent},
  {path:'reject',component:RejectComponent},
  {path:'history',component:HistoryOrderComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
