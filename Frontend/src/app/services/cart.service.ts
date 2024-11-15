import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseUrl = 'http://localhost:8080/api/cart';

  constructor(private http: HttpClient) {}

  // Method to add item to cart
  addToCart(formData: FormData): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/add`, formData);
  }

  // Get all cart items for a user
  getCartItems(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/${userId}`);
  }

  
}