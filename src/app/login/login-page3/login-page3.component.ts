import { Component, OnInit } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { UserprofileService } from 'src/app/services/userprofile.service';

@Component({
  selector: 'login-page-3',
  templateUrl: './login-page3.component.html',
  styleUrls: ['./login-page3.component.scss']
})
export class LoginPage3Component implements OnInit {
  listofShirtSizes: any;
  listofPantSizes: any;
  listofSuitSizes: any;
  listofShoeSizes: any;
  listofHairColors: string[];
  listofEyeColors: string[];
  showChildrenSizes = false;
  constructor(
    public userprofileService: UserprofileService,
    private appData: AppDataService
  ) { }

  ngOnInit() {
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userprofileService.userProfile));
    this.appData.getFieldAvailableOptions('field_shirt_size_from').subscribe(res => {
      const respose: any = res;
      this.listofShirtSizes = Object.keys(respose.settings.allowed_values);
    });
    this.appData.getFieldAvailableOptions('field_pant_size_from').subscribe(res => {
      const respose: any = res;
      this.listofPantSizes = Object.keys(respose.settings.allowed_values);
    });
    this.appData.getFieldAvailableOptions('field_suit_size_from').subscribe(res => {
      const respose: any = res;
      this.listofSuitSizes = Object.keys(respose.settings.allowed_values);
    });
    this.appData.getFieldAvailableOptions('field_shoe_size_from').subscribe(res => {
      const respose: any = res;
      this.listofShoeSizes = Object.keys(respose.settings.allowed_values);
    });
    this.appData.getFieldAvailableOptions('field_hair_color').subscribe(res => {
      const respose: any = res;
      this.listofHairColors = Object.values(respose.settings.allowed_values);
    });
    this.appData.getFieldAvailableOptions('field_eye_color').subscribe(res => {
      const respose: any = res;
      this.listofEyeColors = Object.values(respose.settings.allowed_values);
    });
  }
  childrenSizes() {
    console.log(this.showChildrenSizes);
    return this.showChildrenSizes;
  }

}
