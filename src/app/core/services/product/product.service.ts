import { Injectable} from '@angular/core';
import { ProductEndPoints } from '../../constants/apiConstants/product-endpoints';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Product, productDetails } from '../../models/product.types';
import { serviceRequestEntpoint } from '../../constants/apiConstants/serviceRequest-endpoints';
import { serviceRequest } from '../../models/serviceRequest';
@Injectable({
  providedIn: 'root',
})
export class ProductService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<Product[]>{
     return this.http.get<Product[]>(environment.apiUrl+`${ProductEndPoints.getAllProduct}`)
  }

  getProductDetailById(id:string):Observable<productDetails>{
    return this.http.get<productDetails>(environment.apiUrl+`${ProductEndPoints.getProductById}/${id}`)
  }

  createServiceRequest(data:serviceRequest):Observable<serviceRequest>{
    return this.http.post<serviceRequest>(environment.apiUrl+serviceRequestEntpoint.createRequest,data); 
  }


}
