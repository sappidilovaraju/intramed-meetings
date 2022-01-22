import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  public get(endpoint: string, params: any) {
    return this.http.get(`${this.apiUrl}${endpoint}`, { params: params });
  }

  public post(endpoint: string, body: any, params: any) {
    return this.http.post(`${this.apiUrl}${endpoint}`, body, { params: params });
  }

  public put(endpoint: string, body: any, params: any) {
    return this.http.put(`${this.apiUrl}${endpoint}`, body, { params: params });
  }

  public delete(endpoint: string, params: any) {
    return this.http.delete(`${this.apiUrl}${endpoint}`, { params: params });
  }
}
