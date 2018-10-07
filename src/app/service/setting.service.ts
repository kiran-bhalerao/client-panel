import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  allowRegistration = false;
  constructor() { }

  getSetting() {
    if (localStorage.getItem('setting'))
      this.allowRegistration = JSON.parse(localStorage.getItem('setting')).allowRegistration;
    return this.allowRegistration;
  }
  setSetting(value) {
    var setting = {
      allowRegistration: value
    }
    localStorage.setItem('setting', JSON.stringify(setting));
  }
}
