import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { UserprofileService } from 'src/app/services/userprofile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page-6',
  templateUrl: './login-page6.component.html',
  styleUrls: ['./login-page6.component.scss']
})
export class LoginPage6Component implements OnInit {

  constructor(
    public userprofileService: UserprofileService,
    private appData: AppDataService,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
  }

  saveUser() {
    this.userprofileService.saveProfile().subscribe((res) => {
      const respose: any = res;
      if (respose && respose.message && respose.message === 'success') {
        this.router.navigate(['/login/7']);
      }
    });
    /*
    if ( this.userprofileService.isLoggedIn() ) {
      this.userprofileService.saveProfile().subscribe((res) => {
        const respose: any = res;
        if (respose && respose.message && respose.message === 'success') {
          this.router.navigate(['/login/7']);
        }
      });
    } else {
      this.userprofileService.registerUser(this.userprofileService.userProfile[0]).subscribe((res) => {
        const respose: any = res;
        if (respose && respose.message && respose.message === 'success') {
          this.router.navigate(['/login/7']);
        }
      });
    }
    */
  }

}
