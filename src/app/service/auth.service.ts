import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apurl = 'http://localhost:3000/user';

  GetAll() {
    return this.http.get(this.apurl)
  }

  Getbycode(code: any) {
    return this.http.get(this.apurl + '/' + code)
  }

  Processregister(inputdata: any) {
    return this.http.post(this.apurl, inputdata)
  }

  upadateuser(code: any, inputdata: any) {
    return this.http.put(this.apurl + '/' + code, inputdata)
  }

}
