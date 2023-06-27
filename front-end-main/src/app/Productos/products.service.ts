import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatearFecha } from '../utilidades/utilidades';
import {  Filters, Products} from './Products';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl + "Products";

  public GetProducts(pelicula: Filters): Observable<Products[]>{
    return this.http.post<Products[]>(`${this.apiUrl}/GetAllProducts`,pelicula);
  }

  public GetProductsById(idProduct: string): Observable<Products>{
    return this.http.get<Products>(`${this.apiUrl}/GetProductById?idProduct=${idProduct}`,);
  }


  public delete(id:string){
    return this.http.delete(`${this.apiUrl}/DeleteProduct?idProduct=${id}`);
  }

  public update(product:Products){
    return this.http.put<Products[]>(`${this.apiUrl}/UpdateProduct`,product);
  }


  public crear(product: Products){
    return this.http.post(`${this.apiUrl}/AddProduct`,product);
  }

}
