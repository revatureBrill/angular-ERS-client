import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const payload = {
      username: username,
      password: password
    };
    return this.httpClient.post('http://localhost:8080/ChatApp/login', payload);
  }
}
