import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from 'src/cart/component/cart/cart.component';
import { AllProductComponent } from 'src/product/component/all-product/all-product.component';
import { DetialsProductComponent } from 'src/product/component/detials-product/detials-product.component';
import { HeaderComponent } from 'src/shared/component/header/header.component';
import { HomeComponent } from './home/component/home/home.component';
import { AboutComponent } from 'src/shared/component/about/about.component';

const routes: Routes = [
 {path:'product',component:AllProductComponent},
 {path:'detial/:id',component:DetialsProductComponent},
 {path:'product/detial/:id',component:DetialsProductComponent},
 {path:'cart',component:CartComponent},
 {path:'about',component:AboutComponent},
 {path:'**',component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
