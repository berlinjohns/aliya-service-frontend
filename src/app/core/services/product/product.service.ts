import { Injectable} from '@angular/core';
import { ProductEndPoints } from '../../constants/apiConstants/product-endpoints';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product } from '../../models/product.types';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
     return this.http.get<Product[]>(environment.apiUrl+`${ProductEndPoints.getAllProduct}`)
  }

  getProductDetailById(id:string):Observable<Product>{
    return this.http.get<Product>(environment.apiUrl+`${ProductEndPoints.getProductById}/${id}`)
  }
}
