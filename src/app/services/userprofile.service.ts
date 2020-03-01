import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {
  userProfileEmpty = [{
    field_profile_number_export: '',
    field_photos_export: [],
    field_first_name_export: '',
    field_last_name_export: '',
    field_about_me_export: '',
    field_address_export: '',
    field_agreed_to_terms_export: '',
    field_birthday_export: '',
    field_bra_size_export: '',
    field_bureau_export: '',
    field_category_export: [],
    field_cellphone_export: '',
    field_city_export: '',
    field_country_export: '',
    created_export: '',
    field_dialect_one_export: '',
    field_dialect_three_export: '',
    field_dialect_two_export: '',
    field_ethnic_origin_export: '',
    field_fax_export: '',
    field_first_name_export_1: '',
    field_gender_export: '',
    field_migrate_example_gender_export: false,
    field_hair_color_export: '',
    field_language_four_export: '',
    field_language_four_rating_export: 0,
    field_language_one_export: '',
    field_language_one_rating_export: 0,
    field_language_three_export: '',
    field_language_three_rating_export: 0,
    field_language_two_export: '',
    field_language_two_rating_export: 0,
    field_last_name_export_1: '',
    field_licenses_export: [],
    name_export: '',
    field_nationality_export: '',
    field_new_from_export: '',
    field_new_profile_export: '',
    field_new_until_export: '',
    field_occupation_export: '',
    field_old_profile_id_export: '',
    langcode_export: '',
    field_pant_size_from_export: '',
    field_pant_size_to_export: '',
    delta: '',
    field_photo_thumbnails_export: [],
    field_photos_export_1: [],
    field_profile_number_export_1: '',
    field_profile_status_export: '',
    field_profile_type_export: '',
    field_recently_updated_export: '0',
    field_shirt_size_from_export: '',
    field_shirt_size_to_export: '',
    field_shoe_size_from_export: '',
    field_shoe_size_to_export: '',
    field_skills_export: [],
    field_sports_and_hobby_export: '',
    field_suit_size_from_export: '',
    field_suit_size_to_export: '',
    field_telephone_export: [],
    changed_export: '',
    uid_export: '',
    field_video_thumbnails_export: [],
    field_videos_export: [],
    field_zipcode_export: '',
    field_skills: '',
    field_language_four: '',
    field_language_four_rating: '',
    field_language_one: '',
    field_language_one_rating: '',
    field_language_three: '',
    field_language_three_rating: '',
    field_language_two: '',
    field_language_two_rating: '',
    field_licenses: '',
    field_eye_color_export: '',
    field_height_export: '',
    field_weight_export: ''
  }];
  userProfile = localStorage.getItem('currentUserProfile') ? JSON.parse(localStorage.getItem('currentUserProfile')) : this.userProfileEmpty;
  constructor(
    private http: HttpClient
  ) { }
  registerUser(profileInfoJson = {}) {
    const registerEndpoint = environment.backendBaseUrl + '/user/register?_format=json';
    return this.http.post(registerEndpoint, profileInfoJson);
  }

  login(userJson) {
    const headers = new HttpHeaders('Content-type:application/json');
    const options = {
      headers
    };
    const loginEndPoint = environment.backendBaseUrl + '/user/login?_format=json';
    return this.http.post(loginEndPoint, userJson, options);
  }

  logout() {
    this.userProfile = this.userProfileEmpty;
    localStorage.setItem('currentUserProfile', JSON.stringify(this.userProfile));
    localStorage.removeItem('userLoginResponse');
  }

  loadProfile(uid) {
    const userProfileEndPoint = environment.backendBaseUrl + '/model/' + uid;
    return this.http.get(userProfileEndPoint);
  }

  saveProfile() {
    const headers = new HttpHeaders('Content-type:application/json');
    const options = {
      headers
    };
    console.log(this.userProfile[0]);
    const saveUserEndPoint = environment.backendBaseUrl + '/api/user-update';
    return this.http.post(saveUserEndPoint, this.userProfile[0], options);
  }
  isLoggedIn() {
    if (this.userProfile[0] && this.userProfile[0].uid_export) {
      return true;
    } else {
      return false;
    }
  }
}
