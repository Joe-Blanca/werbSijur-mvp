import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoRequisicaoComponent } from './novo-requisicao.component';

describe('NovoRequisicaoComponent', () => {
  let component: NovoRequisicaoComponent;
  let fixture: ComponentFixture<NovoRequisicaoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoRequisicaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoRequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
