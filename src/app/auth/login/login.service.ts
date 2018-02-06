import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { BaseService } from "../../services/base-service";
import { environment } from '../../../environments/environment';

export class User {
  constructor(
    public email: string,
    public password: string) { }
}

@Injectable()
export class LoginService {
  rootUrl: string =   environment.config.BASE_URL;
  baseUrl: string =   environment.config.API_URL;

  constructor(private _router: Router, private http: Http) { }

  logout() { console.log("hererrer")
    localStorage.removeItem("user");
    localStorage.clear();
    this._router.navigate(['login']);
  }

  login(user) {
    return this.http.get(`${this.baseUrl}people/?search=${user.username}`)
                    .toPromise().then((res: Response) => res.json());
  }

  checkCredentials() {
    if (localStorage.getItem("user") === null) {
      this._router.navigate(['login']);
    }
  }
 
}
