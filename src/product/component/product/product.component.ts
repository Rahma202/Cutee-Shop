import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input()data:any={};
@Output() item=new EventEmitter();
checked:boolean=false;
amount:number=1;
add(){
this.item.emit({item:this.data,quanity:this.amount})
}
}
