import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private BASE_URL = 'http://localhost:3000/';
  
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any> {
    return this.http.get(`${this.BASE_URL}`+"");
  }


  createCategory(category: Object): Observable<any> {
    return this.http.post(`${this.BASE_URL}`+"addCategory", category);
  }
  updateCategory(id: number): Observable<any> {
    return this.http.put(`${this.BASE_URL}/updateC/${id}`, { responseType: 'text' });
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/deleteC/${id}`, { responseType: 'text' });
  }

}
