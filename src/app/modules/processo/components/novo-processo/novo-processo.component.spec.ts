import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { NovoProcessoComponent } from './novo-processo.component';

describe('NovoProcessoComponent', () => {
  let component: NovoProcessoComponent;
  let fixture: ComponentFixture<NovoProcessoComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoProcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoProcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
