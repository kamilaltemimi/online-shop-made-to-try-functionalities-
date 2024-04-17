import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceStoreComponent } from './ecommerce-store.component';

describe('EcommerceStoreComponent', () => {
  let component: EcommerceStoreComponent;
  let fixture: ComponentFixture<EcommerceStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EcommerceStoreComponent]
    });
    fixture = TestBed.createComponent(EcommerceStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
