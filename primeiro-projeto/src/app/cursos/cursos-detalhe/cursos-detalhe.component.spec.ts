import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosDetalheComponent } from './cursos-detalhe.component';

describe('CursosDetalheComponent', () => {
  let component: CursosDetalheComponent;
  let fixture: ComponentFixture<CursosDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
