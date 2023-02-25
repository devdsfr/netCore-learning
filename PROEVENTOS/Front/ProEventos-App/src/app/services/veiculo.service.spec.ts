import { TestBed } from '@angular/core/testing';
import 'rxjs/add/operator/map';
import { VeiculoService } from './veiculo.service';

describe('VeiculoService', () => {
  let service: VeiculoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeiculoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
