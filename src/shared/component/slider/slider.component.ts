import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
   this.intervalId= setInterval(() => {
      this.add()
    }, 200);
    this.intervalbrand= setInterval(() => {
      this.addbrand()
    }, 100); 
    this.intervalreview= setInterval(() => {
      this.addreview()
    }, 200); 
  }
  intervalId:any;
  intervalbrand:any;
  intervalreview:any;
  x:number=0;
  brand:number=0;
  review:number=0;
 add() {
   if(this.x<20){
    this.x++
   }else{
    clearInterval(this.intervalId)
   }
  }
  addbrand(){
    if(this.brand<160){
      this.brand++
    }
    else{
      clearInterval(this.intervalId)
    }
  }
  addreview(){
    if(this.review<10){
      this.review++
    }
    else{
      clearInterval(this.review)
    }
  }
}

