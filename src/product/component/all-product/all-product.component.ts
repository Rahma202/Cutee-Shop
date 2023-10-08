import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/product/service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css']
})
export class AllProductComponent implements OnInit {
  constructor(private serve:ProductService,private router: Router){
  
  }
  ngOnInit(): void {
    this.getProduct();
    this.getallcategories();
    }
    allProducts:any
    allcategories:any[]=[];
    specficcategory:any[]=[];
    cartProduct:any[]=[]
  getProduct(){
    this.serve.getAllproduct().subscribe((res:any)=>{
      this.allProducts=res;
    
    })
  }
  getallcategories(){
    this.serve.getAllcategories().subscribe((res:any)=>{
      this.allcategories=res;
     
    })
  }
  getspecificcategory(item:any){
    item=item.target.value;
    console.log(item);
    if(item=="all"){
      this.getProduct()
    }
    else{
      this.serve.getspecificcategory(item).subscribe((res:any)=>{
        this.allProducts=res;
        console.log(this.specficcategory);
      })
    }
    }
    reciveData(evenet:any){
       if("cart" in localStorage){
       this.cartProduct=JSON.parse(localStorage.getItem("cart")!);       
        let id=this.cartProduct.find(item =>item.item.id==evenet.item.id);
        
        console.log(id);
        if(id){
          alert("this item in your cart")
        }else{
          this.cartProduct.push(evenet);
          localStorage.setItem("cart",JSON.stringify(this.cartProduct))
        }
       }else{
        this.cartProduct.push(evenet);
        localStorage.setItem("cart",JSON.stringify(this.cartProduct))
       }
       location.reload()
    }
  
 
}
