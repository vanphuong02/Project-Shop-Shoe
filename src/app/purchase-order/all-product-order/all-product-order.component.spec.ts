import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductOrderComponent } from './all-product-order.component';

describe('AllProductOrderComponent', () => {
  let component: AllProductOrderComponent;
  let fixture: ComponentFixture<AllProductOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllProductOrderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllProductOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
