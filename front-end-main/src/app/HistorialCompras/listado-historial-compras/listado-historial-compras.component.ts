import { Component, OnInit } from '@angular/core';
import { HistorialService } from '../historial.service';
import { Shopping } from '../History';

@Component({
  selector: 'app-listado-historial-compras',
  templateUrl: './listado-historial-compras.component.html',
  styleUrls: ['./listado-historial-compras.component.css']
})
export class ListadoHistorialComprasComponent implements OnInit {

  constructor(private historialService:  HistorialService) { }
  allProducts: Shopping[];
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(){
    this.historialService.GetHistory().subscribe(history => {
      this.allProducts = history;
    });
  }

  getLink(shopping: Shopping): string {
    let url = `/historial/detalle/${btoa(JSON.stringify(shopping))}`;
    return url;
}

}
