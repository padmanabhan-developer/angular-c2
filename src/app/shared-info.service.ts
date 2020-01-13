import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedInfoService {
  public isLoggedIn = false;
  constructor() { }

}