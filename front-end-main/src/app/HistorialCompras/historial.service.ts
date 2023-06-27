import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import { Shopping } from './History';

@Injectable({
    providedIn: 'root'
})

export class HistorialService {

    constructor(private http: HttpClient) { }
    private apiUrl = environment.apiUrl + "Buys";
  
    public GetHistory (): Observable<Shopping[]>{
      return this.http.get<Shopping[]>(`${this.apiUrl}/GetHistory`);
    }

    public Create (Shopping: Shopping){
      return this.http.post(`${this.apiUrl}/BuyItems`,Shopping);
    }
  
  }
  