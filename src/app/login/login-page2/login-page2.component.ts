import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'login-page-2',
  templateUrl: './login-page2.component.html',
  styleUrls: ['./login-page2.component.scss']
})
export class LoginPage2Component implements OnInit {

  constructor(
    public userprofileService: UserprofileService,
  ) { }

  ngOnInit() {
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
  }

}
