import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { HistorialService } from '../historial.service';
import { ProductService } from 'src/app/Productos/products.service';

describe('listadoHistorial', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [HistorialService,ProductService ],
  }));

   it('should be created', () => {
    const service: HistorialService = TestBed.get(HistorialService);
    expect(service).toBeTruthy();
   });

   it('should have getData function', () => {
    const service: HistorialService = TestBed.get(HistorialService);
    expect(service.GetHistory).toBeTruthy();
   });

   it('should have post function', () => {
    const service: HistorialService = TestBed.get(HistorialService);
    expect(service.Create).toBeTruthy();
   });

});
