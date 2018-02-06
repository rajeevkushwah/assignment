import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Route } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from './login.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  busy: Promise<any>;
  public user = { username: "", password: "" };
  public msg = '';
  public isForgotPassword: boolean = false;
  public emailNew: string;

  constructor(
    private _service: LoginService,
    private _router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    localStorage.clear();
    
  }

  login() {
    this.busy = this._service.login(this.user).then(
      (res: any) => {
        let data = res;
     //console.log(data)
        
        if(data.count>0){
         let user = data.results.filter(item => item.birth_year == this.user.password  && item.name == this.user.username.trim() );
         console.log("user===>",user)
         if(user.length>0){
           localStorage.setItem('UserInfo', JSON.stringify(user[0]));
           this._router.navigate(['/']);
         }else{
            this.toastr.error('Invaild username or password');
         }
         
        }else{ 
          this.toastr.error('Invaild username or password');
        }

        
        
      },
      (error) => {
        if(error.headers._headers.get('content-type')[0] == "application/json; charset=utf-8") {
          this.toastr.error(error.json().msg);
        } else {
          this.toastr.error('you are not able to login. Please try later.');
        }
      }
    );
  }

}
