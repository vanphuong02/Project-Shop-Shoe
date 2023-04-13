import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './Product/product-detail/product-detail.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './Product/product-list/product-list.component';
import { ProductFilterComponent } from './Product/product-filter/product-filter.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
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
  { path: 'card', component: CartComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
