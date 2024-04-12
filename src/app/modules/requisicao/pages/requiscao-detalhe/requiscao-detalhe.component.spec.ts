import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiscaoDetalheComponent } from './requiscao-detalhe.component';

describe('RequiscaoDetalheComponent', () => {
  let component: RequiscaoDetalheComponent;
  let fixture: ComponentFixture<RequiscaoDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequiscaoDetalheComponent]
    });
    fixture = TestBed.createComponent(RequiscaoDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
