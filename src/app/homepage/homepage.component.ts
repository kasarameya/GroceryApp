import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { product } from './product';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {


  constructor(private productService: ProductService) { }
  allProduct : product[];
  ngOnInit() {
   
  }

  getAllProducts() :void{
    this.productService.getAllProducts().subscribe(
      products => {this.allProduct;} 
    );
    console.log("kk");
  }

}
