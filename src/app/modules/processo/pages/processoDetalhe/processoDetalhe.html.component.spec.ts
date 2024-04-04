import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessDetalheComponent } from './processoDetalhe.html.component';

describe('ProcessDetalheComponent', () => {
  let component: ProcessDetalheComponent;
  let fixture: ComponentFixture<ProcessDetalheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProcessDetalheComponent]
    });
    fixture = TestBed.createComponent(ProcessDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
