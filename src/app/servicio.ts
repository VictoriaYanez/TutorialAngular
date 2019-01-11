import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { 
  }
  createHeader() {
    var header = new HttpHeaders();
    header = header.set('Content-Type', 'application/json');
    header = header.set("Access-Control-Allow-Origin", "*");
    header = header.set("Access-Control-Allow-Methods", "POST, GET, OPTIONS")
    return header
  }

  createToken(token) {
    let header = this.createHeader();
    header = header.set('Authorization', 'Bearer ' + token);
    return header;
  }

  public postProvider(localUrl, token, value) {
    return new Promise((resolve, reject) => {
      this.http.post(API_URL + localUrl, value, { headers: this.createToken(token) }).subscribe(
        data => {
          resolve(data)
        }, err => {
          reject(err)
        })
    })
  } 

}