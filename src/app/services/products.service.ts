import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  getProducts(): Observable<any> {
    return this.http.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
  }
}
