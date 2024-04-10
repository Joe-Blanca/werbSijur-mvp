import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenhoraComponent } from './penhora.component';

describe('PenhoraComponent', () => {
  let component: PenhoraComponent;
  let fixture: ComponentFixture<PenhoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenhoraComponent]
    });
    fixture = TestBed.createComponent(PenhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
