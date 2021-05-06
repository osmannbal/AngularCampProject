import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { listResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl = 'https://localhost:44314/api/categories/getall';
  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<listResponseModel<Category>>{
    return this.httpClient.get<listResponseModel<Category>>(this.apiUrl);
  }
}
