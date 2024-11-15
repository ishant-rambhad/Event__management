// src/app/services/service-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceDataService {
  private apiUrl = 'http://localhost:8080/api/services';

  constructor(private http: HttpClient) {}

  getAllServices(): Observable<Service[]> {
    return this.http.get<Service[]>(`${this.apiUrl}/service`); // Adjusted endpoint
  }

  saveService(service: Service): Observable<Service> {
    return this.http.post<Service>(`${this.apiUrl}/add-service`, service); // Adjusted endpoint
  }
}
