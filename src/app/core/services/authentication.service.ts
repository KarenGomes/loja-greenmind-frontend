import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { User } from '../../shared/models/user';
import { catchError, map, throwError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

const API_URL_LOGIN = `${environment.apiUrl}auth/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(login: User){
    return this.http.post<{token: string}>(API_URL_LOGIN, login).pipe(
      map(response => {
        const {token} = response;
        if(token){
          const data = jwtDecode(token);
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(data));
          return data;
        }
        throw new Error('token não encontrado');
      }),
      catchError(error => {
        console.error('erro ao efetuar login', error);
        return throwError(() => new Error('falha no login'));
      })
    );

  }

  logout() {
    localStorage.clear()
    sessionStorage.clear()
  }

}
