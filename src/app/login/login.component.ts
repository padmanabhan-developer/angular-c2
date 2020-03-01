import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {UserprofileService} from './../services/userprofile.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {
    name: '',
    pass: ''
  };
  constructor(
    public userprofileService: UserprofileService,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  login(userInfo) {
    console.log(userInfo);
    this.userprofileService.login(userInfo).subscribe(
      (res) => {
        const response: any = res;
        if (response.current_user && response.current_user.uid) {
          this.cookie.set('x-csrf-token', res['csrf_token']);
          localStorage.setItem('userLoginResponse', JSON.stringify(res));
          this.userprofileService.loadProfile(response.current_user.uid).subscribe(
            (res) => {
              if (res) {
                this.userprofileService.userProfile = res;
                localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
                this.router.navigate(['/login/1']);
              }
            }
          );
        }
      }
    );
  }

}
