import { Component, OnInit } from '@angular/core';
import { UserprofileService } from 'src/app/services/userprofile.service';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'login-page-5',
  templateUrl: './login-page5.component.html',
  styleUrls: ['./login-page5.component.scss']
})
export class LoginPage5Component implements OnInit {
  listOfLanguages: any;
  listOfLanguageIDs: string[];
  listOfLanguageNames: unknown[];
  currentRate = 3;
  constructor(
    public userprofileService: UserprofileService,
    private appData: AppDataService
  ) { }

  ngOnInit() {
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
    this.appData.getFieldAvailableOptions('field_language_one').subscribe(res => {
      const respose: any = res;
      this.listOfLanguages = respose.settings.allowed_values;
      this.listOfLanguageIDs = Object.keys(this.listOfLanguages);
      this.listOfLanguageNames = Object.values(this.listOfLanguages);
    });
  }

}
