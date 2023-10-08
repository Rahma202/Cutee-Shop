import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from 'src/product/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private serve:ProductService,private router: Router){}
@Input()data:any={};
@Output() item=new EventEmitter();
checked:boolean=false;
amount:number=1;
add(){
this.item.emit({item:this.data,quanity:this.amount});

}
}
