import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosContratadosComponent } from './servicos-contratados.component';

describe('ServicosContratadosComponent', () => {
  let component: ServicosContratadosComponent;
  let fixture: ComponentFixture<ServicosContratadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicosContratadosComponent]
    });
    fixture = TestBed.createComponent(ServicosContratadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
