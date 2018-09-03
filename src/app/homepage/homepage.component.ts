import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { product } from './product';
import { CartService } from './cart.service';
import { cart } from './cart';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private productService: ProductService, private cartServices : CartService) { }
  allProduct : product[];

  cartModal : cart = {
    custid:1,
    productid:2,
    productname:"kirthi",
    productprice:7.0
  };

  ngOnInit() {
   
  }

  getAllProducts() :void{
    this.productService.getAllProducts().subscribe(
      products => {this.allProduct;} 
    );
  
  } 
  addToCart(): void{  
    this.cartServices.insertIntoCart(this.cartModal);
  }

}
