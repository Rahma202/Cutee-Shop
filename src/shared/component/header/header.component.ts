import { Component } from '@angular/core';
import { ProductService } from 'src/product/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor( private serve:ProductService){this.getnumberofcart()}
  arr:any[]=JSON.parse(localStorage.getItem('cart')!);
  x:number=0 ;
  getnumberofcart(){
    if(this.arr){
      this.x=this.arr.length

    }
    else{
      this.x=0
    }
  }
 
  
}
