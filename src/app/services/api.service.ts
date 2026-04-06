import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://rlt-tally-1.onrender.com/api'; 
  constructor(private http: HttpClient) { }

  //Enroll
  enroll(data: any) {
    return this.http.post(`${this.baseUrl}/enroll`, data);
  }

  //Career
  career(data: any) {
    return this.http.post(`${this.baseUrl}/career`, data);
  }

  //Contact
  contact(data: any) {
    return this.http.post(`${this.baseUrl}/contact`, data);
  }

  //Register
  register(data: any) {
    return this.http.post(`${this.baseUrl}/register`, data);
  }
}
