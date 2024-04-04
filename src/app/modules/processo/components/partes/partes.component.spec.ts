import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent } from './partes.component';

describe('TesteComponent', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TesteComponent]
    });
    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
