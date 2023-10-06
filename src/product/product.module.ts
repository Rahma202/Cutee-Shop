
import {  CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import{AllProductComponent}from '../product/component/all-product/all-product.component';
import{ProductService}from '../product/service/product.service';
import { ProductComponent } from './component/product/product.component';
import { SharedModule } from 'src/shared/shared.module';
import{FormsModule}from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DetialsProductComponent } from './component/detials-product/detials-product.component';

@NgModule({
  declarations: [
    AllProductComponent,
     DetialsProductComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
   
  ],
  providers: [ProductService],
  schemas: [NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA],
  exports:[AllProductComponent]

})
export class productModule { }
