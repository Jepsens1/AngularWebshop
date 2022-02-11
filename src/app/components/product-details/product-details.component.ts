import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { Product } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;
  constructor(private route : ActivatedRoute,
    private productservice: ProductService, private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productservice.getProduct(id).subscribe(product => this.product = product);
  }
  goBack():void{
    this.location.back();
  }

}
