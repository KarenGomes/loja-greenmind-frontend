import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../../shared/models/user';
import { catchError } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

const API_URL_LOGIN = `${environment.apiUrl}auth/login`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public doLogin(login: User){
    this.http.post(API_URL_LOGIN, login).subscribe((token) => {
      console.log(token)
      // const decodeToken = jwtDecode(token);
      //   userId =
      // })
    })

  }
}
