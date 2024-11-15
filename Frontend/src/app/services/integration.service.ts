import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/login-request';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { SignupRequest } from '../models/signup-request';
import { SignupResponse } from '../models/signup-response';

const BASE_URL = "http://localhost:8080/api/customers";

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  constructor(private http: HttpClient) { }

  doLogin(request: LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(BASE_URL + "/Customer-login", request);
  }

  dashboard(): Observable<any> {
    return this.http.get<any>(BASE_URL + "/Customer-dashboard");
  }

  doRegister(request: SignupRequest):Observable<SignupResponse> {
    return this.http.post<SignupResponse>(BASE_URL + "/Customer-registration", request);
  }
}
