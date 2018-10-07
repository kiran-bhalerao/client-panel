import { SettingService } from './../service/setting.service';
import { map } from 'rxjs/operators';

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class RegGuard implements CanActivate {
    isAuthen: boolean = false;
    constructor(private router: Router, private auth: AngularFireAuth,private authenticationService:AuthenticationService,private settingService:SettingService) {
    }
    canActivate(): Observable<boolean> {
        return this.authenticationService.getAuth().pipe(map((auth) => {
            if (!auth && this.settingService.getSetting()) {
                return true;
            } else {
                this.router.navigate(['/']);
                return false;
            }
        }));
    }
}