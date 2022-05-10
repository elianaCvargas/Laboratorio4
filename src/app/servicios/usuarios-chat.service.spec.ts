import { TestBed } from '@angular/core/testing';

import { UsuariosChatService } from './usuarios-chat.service';

describe('UsuariosChatService', () => {
  let service: UsuariosChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsuariosChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
