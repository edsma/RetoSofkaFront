import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Productos/products.service';
import { Filters, Products } from '../Productos/Products';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  allProducts: Products[];
  initialFilter: Filters;
  page: number = 1;
  constructor(private productsService:  ProductService) { }

  ngOnInit(): void {
    this.initialFilter = {
      page : 1,
      top : 10  ,
      rowToOrder: ''
    };
    this.cargarDatos();   
  }

  GetProducts(status: boolean){
    this.page = status? this.page = this.page + 1 : this.page = this.page -1;
    this.initialFilter.page = this.page === -1? 0: this.page;
    this.cargarDatos();
    if(this.allProducts.length === 0){
      this.initialFilter.page = 1;
      this.page = 1;
      this.cargarDatos();
    }
  }

  cargarDatos(){
    this.productsService.GetProducts(this.initialFilter).subscribe(landingPage => {
      this.allProducts = landingPage;
    });
  }

  borrado(){
    this.cargarDatos();
  }
}
