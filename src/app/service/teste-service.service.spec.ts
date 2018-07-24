import { TestBed, inject } from '@angular/core/testing';

import { TesteServiceService } from './teste-service.service';

describe('TesteServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesteServiceService]
    });
  });

  it('should be created', inject([TesteServiceService], (service: TesteServiceService) => {
    expect(service).toBeTruthy();
  }));
});
