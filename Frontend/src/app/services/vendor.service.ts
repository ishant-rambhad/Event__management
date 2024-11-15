import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { SignupResponse } from '../models/signup-response';
import { VendorRegistration } from '../models/vendor-registration.model';

const BASE_URL = "http://localhost:8080/api/vendors";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  doLogin(request: LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(BASE_URL + "/Vendor-login", request);
  }

  dashboard(): Observable<any> {
    return this.http.get<any>(BASE_URL + "/Vendor-dashboard");
  }

  doRegister(request: VendorRegistration):Observable<SignupResponse> {
    return this.http.post<SignupResponse>(BASE_URL + "/Vendor-registration", request);
  }
}
