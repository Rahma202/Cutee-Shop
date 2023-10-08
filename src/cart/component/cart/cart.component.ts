import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  ngOnInit(): void {
    this.gatallproduct();
  }
  x:number=5
  cartproduct:any[]=[];
  total:number=0
  gatallproduct(){
      let allproduct=JSON.parse(localStorage.getItem('cart')!);
      this.cartproduct=allproduct;
      this.x=this.cartproduct.length;
      for(let i=0;i<this.cartproduct.length;i++){
        this.total=this.total+this.cartproduct[i].item.price;
      }
      
  }
  deletitem(id:any){
     for(let i=0;i<this.cartproduct.length;i++){
      if(this.cartproduct[i].item.id==id){
       this.cartproduct.splice(i,1)
       
      }        
     }
     localStorage.setItem("cart",JSON.stringify(this.cartproduct));
     this.gatallproduct()
     
  }
  clearcart(){
   
  }


}
