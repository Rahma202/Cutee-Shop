import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/product/service/product.service';

@Component({
  selector: 'app-detials-product',
  templateUrl: './detials-product.component.html',
  styleUrls: ['./detials-product.component.css']
})
export class DetialsProductComponent implements OnInit{
  id:any;
  detialProduct:any
  constructor(private route:ActivatedRoute,private serve:ProductService){
    this.id=this.route.snapshot.paramMap.get("id")
    console.log(this.id);
    
  }
  ngOnInit(): void {
   this.getDetialsProduct()
  }
  getDetialsProduct(){
    this.serve.getproduct(this.id).subscribe(
      (res:any)=>{
        this.detialProduct=res
        console.log(res);
    })

  }


}
