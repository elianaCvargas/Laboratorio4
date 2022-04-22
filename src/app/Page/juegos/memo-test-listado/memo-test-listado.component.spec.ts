import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoTestListadoComponent } from './memo-test-listado.component';

describe('MemoTestListadoComponent', () => {
  let component: MemoTestListadoComponent;
  let fixture: ComponentFixture<MemoTestListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoTestListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemoTestListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
