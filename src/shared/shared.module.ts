import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { SliderComponent } from './component/slider/slider.component';
import { FooterComponent } from './component/footer/footer.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { AboutComponent } from './component/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SliderComponent,
    FooterComponent,
    SpinnerComponent,
    AboutComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  exports:[ HeaderComponent,SliderComponent,FooterComponent,SpinnerComponent,AboutComponent]
})
export class SharedModule { }
