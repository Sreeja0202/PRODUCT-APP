import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductModel } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
title:String = "Product List";
  products: ProductModel[] = [];
imageWidth: number = 50;
imageMargin: number = 2;
constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getProducts().subscribe((data)=>
    {
      this.products=JSON.parse(JSON.stringify(data));
    })
  }

}
