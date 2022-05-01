import { TestBed } from '@angular/core/testing';

import { PlantaService } from './planta.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('PlantaService', () => {
  let service: PlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
    service = TestBed.inject(PlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
