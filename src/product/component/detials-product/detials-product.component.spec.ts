import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetialsProductComponent } from './detials-product.component';

describe('DetialsProductComponent', () => {
  let component: DetialsProductComponent;
  let fixture: ComponentFixture<DetialsProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetialsProductComponent]
    });
    fixture = TestBed.createComponent(DetialsProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
