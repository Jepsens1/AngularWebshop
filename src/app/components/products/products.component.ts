import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.getproducts();
  }
  getproducts(): void {
    this.productservice.getProducts().subscribe(products => this.products = products);
  }
}
