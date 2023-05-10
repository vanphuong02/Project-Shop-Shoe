import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { HistoryOrderComponent } from './purchase-order/history-order/history-order.component';
<<<<<<< HEAD
import { PurchaseStatusComponent } from './purchase-order/purchase-status/purchase-status.component';
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
  {path:'history',component:HistoryOrderComponent},
  {path:'purchase-status/:id',component:PurchaseStatusComponent},
  {path:'**',component:ErrorComponent}
=======
import { SellerHomeComponent } from './admin/seller-home/seller-home.component';
import { SellerAddProductComponent } from './admin/seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './admin/seller-update-product/seller-update-product.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'Product', children: [
      { path: 'product-list', component: ProductListComponent },
      { path: 'product-detail/:id', component: ProductDetailComponent },
      { path: 'product-filter', component: ProductFilterComponent }
    ]
  },
  { path: 'order-status', canActivate: [AuthGuard], component: OrderStatusComponent },
  { path: 'homeadmin', component: AdminHomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
  { path: 'all-product-order', component: AllProductOrderComponent },
  { path: 'complete', component: CompleteComponent },
  { path: 'pending-approval', component: PendingApprovalComponent },
  { path: 'reject', component: RejectComponent },
  { path: 'history', component: HistoryOrderComponent },
  {
    path: 'seller-home', component: SellerHomeComponent,

  },
  {
    path: 'seller-update-product/:id', component: SellerUpdateProductComponent,


  },
  {
    path: 'seller-add-product', component: SellerAddProductComponent,


  },
  { path: '**', component: ErrorComponent }
>>>>>>> 2b24f6c9935e5e59160e0fa864d66aea6d3729b1
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
