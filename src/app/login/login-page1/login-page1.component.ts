import { AppDataService } from 'src/app/services/app-data.service';
import { UserprofileService } from './../../services/userprofile.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-page1',
  templateUrl: './login-page1.component.html',
  styleUrls: ['./login-page1.component.scss']
})
export class LoginPage1Component implements OnInit {
  password = {
    first: '',
    confirm: ''
  };
  listOfCountries: any;
  listOfCountryIDs: string[];
  listOfCountryNames: unknown[];
  constructor(
    public userprofileService: UserprofileService,
    private appData: AppDataService
  ) { }

  ngOnInit() {
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
    this.appData.getFieldAvailableOptions('field_country').subscribe(res => {
      const respose: any = res;
      this.listOfCountries = respose.settings.allowed_values;
      this.listOfCountryIDs = Object.keys(this.listOfCountries);
      this.listOfCountryNames = Object.values(this.listOfCountries);
    });
  }

}
