import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretensaoComponent } from './pretensao.component';

describe('PretensaoComponent', () => {
  let component: PretensaoComponent;
  let fixture: ComponentFixture<PretensaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PretensaoComponent]
    });
    fixture = TestBed.createComponent(PretensaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
