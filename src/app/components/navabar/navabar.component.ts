import { SettingService } from './../../service/setting.service';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../service/authentication.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {
  isAuthen: boolean;
  user: String;
  showRegister: boolean = true;
  constructor(private authenticationService: AuthenticationService, private router: Router, private settingService: SettingService) { }

  ngOnInit() {
    this.showRegister = this.settingService.getSetting();

    this.authenticationService.getFireAuth().auth.onAuthStateChanged((user) => {
        this.isAuthen = (user) ? true : false;
    });

  }
  logOut() {
    this.authenticationService.logout()
      .then(() => {
        this.isAuthen = false;
        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

}
