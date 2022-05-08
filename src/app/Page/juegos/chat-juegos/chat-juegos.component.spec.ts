import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatJuegosComponent } from './chat-juegos.component';

describe('ChatJuegosComponent', () => {
  let component: ChatJuegosComponent;
  let fixture: ComponentFixture<ChatJuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatJuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatJuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
