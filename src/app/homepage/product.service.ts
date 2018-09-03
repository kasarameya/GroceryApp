import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from './product';
import { tap } from 'rxjs/operators';
 
@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productServiceUrl= "/server/api/v1/products";
 
  constructor(private http: HttpClient) { }
   
  getAllProducts(): Observable<product[]>{
    return this.http.get<product[]>(this.productServiceUrl).pipe(
      tap(data => console.log(JSON.stringify(data))
      )
    )
  };

  saveProduct(product){
    return this.http.post<product>(this.productServiceUrl, product);
  }

}
