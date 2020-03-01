import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
  profileData: any;
  userId: any;
  defaultImage: string;
  profileFallback: string;
  showVideo: boolean;
  showImage: boolean;
  loadedAssetUrl = 'assets/images/thumb4.png';
  constructor(
    private appService: AppDataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.defaultImage = this.appService.defaultImage;
    this.profileFallback = this.appService.profileFallback;
    this.userId = this.route.snapshot.paramMap.get('id');
    this.appService.getSingleProfile(this.userId).subscribe((res) => {
      this.profileData = res[0];
    });
  }
  loadAsset(index, assetType) {
    switch (assetType) {
      case 'image':
        this.showVideo = false;
        this.showImage = true;
        this.loadedAssetUrl = this.profileData.field_photos_export[index];
        break;
    
      case 'video':
        this.showImage = false;
        this.showVideo = true;
        this.loadedAssetUrl = this.profileData.field_videos_export[index];
        break;
    
      default:
        break;
    }
  }

}
