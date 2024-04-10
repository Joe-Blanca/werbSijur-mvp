import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgPagamentosComponent } from './prog-pagamentos.component';

describe('ProgPagamentosComponent', () => {
  let component: ProgPagamentosComponent;
  let fixture: ComponentFixture<ProgPagamentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgPagamentosComponent]
    });
    fixture = TestBed.createComponent(ProgPagamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
