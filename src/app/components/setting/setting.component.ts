import { SettingService } from './../../service/setting.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  isChecked: boolean;
  constructor(private settingService: SettingService) { }

  ngOnInit() {
    this.isChecked = this.settingService.getSetting();
  }
  onChange() {
    this.settingService.setSetting(this.isChecked);
  }
}
