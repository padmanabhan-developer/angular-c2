import { UserprofileService } from 'src/app/services/userprofile.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-hompage',
  templateUrl: './hompage.component.html',
  styleUrls: ['./hompage.component.css']
})
export class HompageComponent implements OnInit {
  data = {};
  defaultImage = '/assets/images/loader/PolygonLoader.svg';
  profileFallback = '/assets/images/profile/profileFallback.jpg';

  searchGender: any = 'all';
  searchFN = '';

  constructor(
    private appService: AppDataService,
    public userprofileService: UserprofileService,
    private router: Router
  ) { }

  ngOnInit() {
    this.defaultImage = this.appService.defaultImage;
    this.profileFallback = this.appService.profileFallback;

    this.appService.getProfiles()
      .subscribe(res => {
        this.data = res;
        // this.data = this.shuffle(this.data);
        this.appService.loadedProfileData = this.data;
      });
  }

  shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }

  loadProfile(id) {
    this.appService.getSingleProfile(id);
    this.router.navigate(['/details', id]);
    // this.router.navigate(['/details']);
  }
  setGender(id) {
    this.searchGender = id;
  }

  resetSearch() {
    this.appService.getProfiles()
    .subscribe(res => {
      this.data = res;
      this.appService.loadedProfileData = this.data;
    });
  }

  submitSearch() {
    let searchCriteria = '?dummy=0';
    if (this.searchGender !== 'all') {
      searchCriteria += '&gender=' + this.searchGender;
    }
    if (this.searchFN !== '') {
      searchCriteria += '&fn=' + this.searchFN;
    }
    if (searchCriteria === '?dummy=0'){
      searchCriteria = '';
    }
    this.appService.getProfiles(searchCriteria)
      .subscribe(res => {
        this.data = res;
        this.appService.loadedProfileData = this.data;
      });
  }
}
