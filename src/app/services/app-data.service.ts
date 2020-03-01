import { Injectable } from '@angular/core';
// import dataSet from './jsonData.json';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  backendBasePath = environment.backendBaseUrl;
  dataSet = {};
  profileInfoUrl = this.backendBasePath + '/model/';
  allProfilesUrl = this.backendBasePath + '/models';
  backendUrlToFetchTempAccess = this.backendBasePath + '/api/get-temp-access';
  backendUrltoInitiateZencoder = this.backendBasePath + '/api/trigger-zencoder';
  defaultImage = '/assets/images/loader/PolygonLoader.svg';
  profileFallback = '/assets/images/profile/profileFallback.jpg';
  castitFilesCDN = 'https://97d4e4ae222d9afabd38-7fc9b1f79831eb45cc1a1ba6343e648b.ssl.cf3.rackcdn.com/';
  loginUrl = '/user/login?_format=json';
  registerUrl = '/user/register?_format=json';
  profileData = {};
  loadedProfileData: {};
  cloudFilesTempUrl: any;
  constructor(
    private http: HttpClient
  ) {
  }

  getProfiles(queryString = '') {
    const url = this.allProfilesUrl + queryString;
    return this.http.get(url);
  }
  getSingleProfile(id) {
    const url = this.profileInfoUrl + id;
    return this.http.get(url);
  }
  getCloudTempUrl(filename) {
    const url = this.backendUrlToFetchTempAccess + '?filename="' + filename + '"';
    return this.http.get(url, {"headers" : {"Content-Type": "application/json"}});
  }
  postFile(fileToUpload: File, filename) {
    const endpoint = this.cloudFilesTempUrl;
    const formData: FormData = new FormData();
    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.put(endpoint, fileToUpload, { observe: 'response' });
  }

  initiateZencoder(filename) {
    return this.http.post(this.backendUrltoInitiateZencoder, {filename});
  }

  getFieldAvailableOptions(field) {
    const options = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Basic YXBpdXNlcjphcGkuY2FzdGl0LmRrQG1haWxpbmF0b3IuY29t'
      }
    };
    const url = this.backendBasePath + '/entity/field_storage_config/user.' + field;
    return this.http.get(url, options);
  }
}
