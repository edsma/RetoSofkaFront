import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCompraComponent } from './crear-compra.component';
import { HistorialService } from '../../historial.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CrearCompraComponent', () => {
  let component: CrearCompraComponent;
  let fixture: ComponentFixture<CrearCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCompraComponent ],
      providers: [HistorialService],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should  buy', () => {
    expect(component.guardarCambios({clientName: 'Prueba1',id:123456,idType:0,detailProduct: null, date: new Date })).toBeTruthy();
  });
});
