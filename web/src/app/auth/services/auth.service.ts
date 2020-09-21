import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { User } from '../interfaces/user.model';

@Injectable()
export class AuthService {

  users: User[]
  editUser: User

  constructor(private http: HttpClient, private router: Router) { }

  check(): boolean {
    return localStorage.getItem('user') ? true : false;
  }

  login(credentials: { email: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${environment.api_url}/login`, credentials)
      .do(data => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', btoa(JSON.stringify(data.user)));
      });
  }

  logout(): void {
    this.http.get(`${environment.api_url}/logout`).subscribe(resp => {
      console.log(resp);
      localStorage.clear();
      this.router.navigate(['auth/login']);
    });
  }

  getUser(): User {
    return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
  }

  setUser(): Promise<boolean> {
    return this.http.get<any>(`${environment.api_url}/me`).toPromise()
      .then(data => {
        if (data.user) {
          localStorage.setItem('user', btoa(JSON.stringify(data.user)));
          return true;
        }
        return false;
      });
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api_url}/users`);
  }
  getUsers (): void {
    this.getAllUsers().subscribe(users => (this.users = users))
  }
}
