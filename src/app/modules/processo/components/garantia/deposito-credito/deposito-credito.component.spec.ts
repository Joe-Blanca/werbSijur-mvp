import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoCreditoComponent } from './deposito-credito.component';

describe('DepositoCreditoComponent', () => {
  let component: DepositoCreditoComponent;
  let fixture: ComponentFixture<DepositoCreditoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoCreditoComponent]
    });
    fixture = TestBed.createComponent(DepositoCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
