import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductFilterComponent } from './Product/product-filter/product-filter.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './Share/header/header.component';
import { FooterComponent } from './Share/footer/footer.component';
import { NavbarComponent } from './Share/navbar/navbar.component';
import { OrderStatusComponent } from './order-status/order-status.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shares/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { ErrorComponent } from './error/error.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AllProductOrderComponent } from './purchase-order/all-product-order/all-product-order.component';
import { PendingApprovalComponent } from './purchase-order/pending-approval/pending-approval.component';
import { CompleteComponent } from './purchase-order/complete/complete.component';
import { RejectComponent } from './purchase-order/reject/reject.component';
import { HistoryOrderComponent } from './purchase-order/history-order/history-order.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductListComponent,
    ProductFilterComponent,
    ProductDetailComponent,
    CartComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    OrderStatusComponent,
    FilterPipe,
    ErrorComponent,
    AdminHomeComponent,
    PurchaseOrderComponent,
    AllProductOrderComponent,
    PendingApprovalComponent,
    CompleteComponent,
    RejectComponent,
    HistoryOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
