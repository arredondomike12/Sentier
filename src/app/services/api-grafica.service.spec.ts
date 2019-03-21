import { TestBed } from '@angular/core/testing';

import { ApiGraficaService } from './api-grafica.service';

describe('ApiGraficaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiGraficaService = TestBed.get(ApiGraficaService);
    expect(service).toBeTruthy();
  });
});
