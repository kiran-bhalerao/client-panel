import { map } from 'rxjs/operators';

import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from "rxjs";
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {
    isAuthen: boolean = false;
    constructor(private router: Router, private auth: AngularFireAuth,private authenticationService:AuthenticationService) {
    }
    canActivate(): Observable<boolean> {
        return this.authenticationService.getAuth().pipe(map((auth) => {
            if (!auth) {
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }));
    }
}