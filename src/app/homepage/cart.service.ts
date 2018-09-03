import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient, HttpHeaders, HttpErrorResponse } from "../../../node_modules/@angular/common/http";
import { cart } from "./cart";

@Injectable({
    providedIn: 'root'
  })

  export class CartService{
    constructor(private http: HttpClient) { }
    private cartServiceUrl= "/server/api/v1/carts/create";
    private cart1: cart;
  
    public insertIntoCart(cart){
      return this.http.post(this.cartServiceUrl, cart).
      subscribe(cart => this.cart1);
    }
}