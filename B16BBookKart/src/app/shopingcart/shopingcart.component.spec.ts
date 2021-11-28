import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCartComponent } from './shopingcart.component';

describe('ShopingcartComponent', () => {
  let component: ShopingCartComponent;
  let fixture: ComponentFixture<ShopingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
