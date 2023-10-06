import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
   }
  getAllproduct(){
   return this.http.get('https://fakestoreapi.com/products')   
  }
  getproduct(id:any){
    return this.http.get('https://fakestoreapi.com/products/'+id)   
   }
  getAllcategories(){
    return this.http.get('https://fakestoreapi.com/products/categories')   
   }
   getspecificcategory(item:any){
    
    return this.http.get('https://fakestoreapi.com/products/category/'+item)   
   }
}
