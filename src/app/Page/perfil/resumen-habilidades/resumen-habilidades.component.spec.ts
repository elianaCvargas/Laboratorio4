import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenHabilidadesComponent } from './resumen-habilidades.component';

describe('ResumenHabilidadesComponent', () => {
  let component: ResumenHabilidadesComponent;
  let fixture: ComponentFixture<ResumenHabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumenHabilidadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenHabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
