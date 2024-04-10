import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositoDebitoComponent } from './deposito-debito.component';

describe('DepositoDebitoComponent', () => {
  let component: DepositoDebitoComponent;
  let fixture: ComponentFixture<DepositoDebitoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DepositoDebitoComponent]
    });
    fixture = TestBed.createComponent(DepositoDebitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
