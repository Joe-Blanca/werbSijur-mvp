import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustasComponent } from './custas.component';

describe('CustasComponent', () => {
  let component: CustasComponent;
  let fixture: ComponentFixture<CustasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustasComponent]
    });
    fixture = TestBed.createComponent(CustasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
